// Compares api-types with the Bot API docs for every type reachable from the message roots below.
// Usage: node scripts/check-api-docs.mjs [path/to/api.html]  (downloads the docs when no file is given)
// Exits with 1 when api-types differ from the docs beyond the known, intended differences listed below.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const DOCS_URL = 'https://core.telegram.org/bots/api';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Docs types whose reachable types are checked. */
const ROOTS = [
	'Message',
	'MaybeInaccessibleMessage',
	'MessageReactionUpdated',
	'MessageReactionCountUpdated',
	'BusinessMessagesDeleted',
];

/** Docs type names that api-types spells differently. */
const RENAMED = { LoginUrl: 'LoginURL' };

/** Intended differences, as `Type.field` (or `Type` for a union), with the reason. */
const KNOWN = {
	'Message.reply_to_message': '`RepliedToMessageFrom`: the replied message never has `reply_to_message` itself',
	'ChecklistTasksDone.checklist_message': '`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
	'ChecklistTasksAdded.checklist_message': '`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
	'PollOptionAdded.poll_message': '`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
	'PollOptionDeleted.poll_message': '`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
	'SuggestedPostApproved.suggested_post_message': '`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
	'SuggestedPostApprovalFailed.suggested_post_message':
		'`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
	'SuggestedPostDeclined.suggested_post_message': '`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
	'SuggestedPostPaid.suggested_post_message': '`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
	'SuggestedPostRefunded.suggested_post_message': '`RepliedToMessageFrom` (docs: no `reply_to_message` in this field)',
};

// --- Docs ------------------------------------------------------------------------------------------------------------

const strip = (html) =>
	html
		.replace(/<img[^>]*alt="([^"]*)"[^>]*>/g, '$1')
		.replace(/<[^>]+>/g, '')
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&#39;/g, "'")
		.replace(/&amp;/g, '&')
		.trim();

function parseDocs(html) {
	const types = {};
	for (const section of html.split(/<h4>/).slice(1)) {
		const head = section.match(/^<a class="anchor" name="[^"]+"[^>]*><i class="anchor-icon"><\/i><\/a>([^<]+)<\/h4>/);
		const name = head?.[1].trim();
		if (!name || !/^[A-Z][A-Za-z0-9]+$/.test(name)) continue;
		const body = section.split(/<h3>/)[0];
		const description = strip(body.match(/<p>([\s\S]*?)<\/p>/)?.[1] ?? '');
		const table = body.match(/<table class="table">([\s\S]*?)<\/table>/)?.[1];
		if (table && /<th>Field<\/th>/.test(table)) {
			const rows = table.matchAll(
				/<tr>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<\/tr>/g,
			);
			types[name] = {
				kind: 'object',
				fields: [...rows].map(([, field, type, text]) => {
					const desc = strip(text);
					return { name: strip(field), type: strip(type), optional: desc.startsWith('Optional'), desc };
				}),
			};
		} else {
			const list = body.match(/<ul>([\s\S]*?)<\/ul>/)?.[1];
			types[name] =
				list && /can be (one|any) of|should be one of|currently/i.test(description)
					? { kind: 'union', members: [...list.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => strip(m[1])) }
					: { kind: 'object', fields: [] };
		}
	}
	return types;
}

// --- api-types -------------------------------------------------------------------------------------------------------

/** Exported api-types, flattened by name: `APIRichText.Bold` -> `RichTextBold`, `APIUser` -> `User`. */
function readApiTypes() {
	const entry = join(ROOT, 'packages/api-types/src/index.ts');
	const program = ts.createProgram([entry], {
		strict: true,
		target: ts.ScriptTarget.ESNext,
		module: ts.ModuleKind.NodeNext,
	});
	const checker = program.getTypeChecker();
	const result = {};

	const literalValues = (type) => {
		const members = type.isUnion() ? type.types : [type];
		return members.every((t) => t.isLiteral()) ? members.map((t) => t.value) : null;
	};

	function shape(type) {
		const members = type.isUnion() ? type.types : [type];
		const props = Object.create(null);
		for (const member of members) {
			for (const symbol of checker.getPropertiesOfType(member)) {
				const propType = checker.getTypeOfSymbol(symbol);
				const nonOptional = checker.getNonNullableType(propType);
				const prop = (props[symbol.name] ??= { optional: false, count: 0, text: new Set(), values: new Set() });
				prop.count++;
				if (symbol.flags & ts.SymbolFlags.Optional) prop.optional = true;
				prop.text.add(checker.typeToString(nonOptional));
				for (const value of literalValues(nonOptional) ?? []) prop.values.add(value);
			}
		}
		// A field that only some union members have (e.g. `text` on `APIMessage.Text`) is optional on the union.
		for (const prop of Object.values(props)) if (prop.count < members.length) prop.optional = true;
		return props;
	}

	function visit(symbol, prefix) {
		if (symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
		const name = prefix + symbol.name.replace(/^API/, '');
		if (symbol.flags & (ts.SymbolFlags.Interface | ts.SymbolFlags.TypeAlias)) {
			const type = checker.getDeclaredTypeOfSymbol(symbol);
			result[name] = {
				props: shape(type),
				members: type.isUnion()
					? type.types.map((t) => {
							const s = t.aliasSymbol ?? t.getSymbol();
							return s
								? checker
										.getFullyQualifiedName(s)
										.replace(/^".*"\./, '')
										.replace(/^API/, '')
										.replace(/\./g, '')
								: '';
						})
					: null,
			};
		}
		if (symbol.flags & ts.SymbolFlags.Namespace) {
			for (const member of checker.getExportsOfModule(symbol)) visit(member, name);
		}
	}

	const module = checker.getSymbolAtLocation(program.getSourceFile(entry));
	for (const symbol of checker.getExportsOfModule(module)) visit(symbol, '');
	return result;
}

// --- Comparison ------------------------------------------------------------------------------------------------------

const SCALARS = {
	Integer: ['number'],
	Float: ['number'],
	String: ['string'],
	Boolean: ['boolean', 'true', 'false'],
	True: ['true', 'boolean'],
};

function compatible(docType, prop) {
	let depth = 0;
	let rest = docType;
	while (rest.startsWith('Array of ')) {
		depth++;
		rest = rest.slice('Array of '.length);
	}
	const texts = [...prop.text];
	const arrayDepth = Math.min(...texts.map((t) => (t.match(/\[\]/g) ?? []).length));
	// RichText is itself recursive (`APIRichText[]`), so its array depth can't be compared.
	if (!/RichText/.test(rest) && arrayDepth !== depth) return false;

	return rest.split(/ or | and |, /).every((part) => {
		if (SCALARS[part]) {
			const allowed = SCALARS[part];
			// Literal and enum types (`0`, `ChatType.Private`) stand for their scalar.
			return texts.some((t) => allowed.some((a) => t.includes(a))) || prop.values.size > 0;
		}
		const name = RENAMED[part] ?? part;
		return texts.some((t) => t.includes(`API${name}`) || t.includes(name));
	});
}

function check(docs, api) {
	const reachable = new Set();
	const queue = [...ROOTS];
	while (queue.length) {
		const name = queue.shift();
		if (reachable.has(name) || !docs[name]) continue;
		reachable.add(name);
		const doc = docs[name];
		if (doc.kind === 'union') queue.push(...doc.members);
		else for (const field of doc.fields) queue.push(...(field.type.match(/[A-Z][A-Za-z0-9]+/g) ?? []));
	}

	const issues = [];
	const report = (key, text) => {
		if (!KNOWN[key]) issues.push(`${key}: ${text}`);
	};

	for (const name of [...reachable].sort()) {
		const doc = docs[name];
		const ts = api[RENAMED[name] ?? name];
		if (!ts) {
			report(name, 'missing from api-types');
			continue;
		}

		if (doc.kind === 'union') {
			const members = new Set(ts.members ?? []);
			// `Message` in api-types is itself the union of its variants (`APIMessage.Text`, ...).
			const has = (member) =>
				members.has(member) || (member === 'Message' && [...members].some((m) => m.startsWith('Message')));
			const missing = doc.members.filter((member) => !has(member));
			if (missing.length) report(name, `union is missing ${missing.join(', ')}`);
			continue;
		}

		for (const field of doc.fields) {
			const key = `${name}.${field.name}`;
			// Fields returned only by getMe live on `APIMethod.GetMe.Result`, not on the type.
			if (field.desc.includes('Returned only in getMe')) continue;
			const prop = ts.props[field.name];
			if (!prop) {
				report(key, `missing (${field.type}${field.optional ? ', optional' : ''})`);
				continue;
			}
			if (prop.optional !== field.optional) {
				report(
					key,
					`docs: ${field.optional ? 'optional' : 'required'}, api-types: ${prop.optional ? 'optional' : 'required'}`,
				);
			}
			const discriminator = field.desc.match(/always “([^”]+)”/)?.[1];
			if (discriminator && !prop.values.has(discriminator)) {
				report(
					key,
					`docs: always "${discriminator}", api-types: ${[...prop.values].join(' | ') || [...prop.text].join(' | ')}`,
				);
			} else if (!discriminator && !compatible(field.type, prop)) {
				report(key, `docs: ${field.type}, api-types: ${[...prop.text].join(' | ')}`);
			}
		}

		const documented = new Set(doc.fields.map((field) => field.name));
		for (const prop of Object.keys(ts.props)) {
			if (!documented.has(prop)) report(`${name}.${prop}`, 'not in the docs');
		}
	}

	return { reachable, issues };
}

const file = process.argv[2];
const html = file ? readFileSync(file, 'utf8') : await (await fetch(DOCS_URL)).text();
const docs = parseDocs(html);
if (!docs.Message) throw new Error('Could not find the Message type in the docs; has the page layout changed?');

const lastChange = html.match(/<h4><a class="anchor" name="([a-z]+-\d+-\d+)"/)?.[1];
const { reachable, issues } = check(docs, readApiTypes());
console.log(
	`Bot API docs (last change: ${lastChange ?? 'unknown'}): ${reachable.size} types reachable from ${ROOTS.join(', ')}.`,
);
if (issues.length) {
	console.log(`\n${issues.length} difference(s) from api-types:\n${issues.map((issue) => `  ${issue}`).join('\n')}`);
	process.exitCode = 1;
} else {
	console.log('api-types match the docs.');
}
