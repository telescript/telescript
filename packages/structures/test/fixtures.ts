import { join } from 'node:path';
import ts from 'typescript';

const MAX_OPTIONAL_DEPTH = 6;
const MAX_DEPTH = 14;

export interface MessageVariant {
	/** Name of the `APIMessage` variant, e.g. `Photo`. */
	name: string;
	/** Builds a payload with every field filled; union members rotate with `seed`. */
	build(seed: number): Record<string, unknown>;
}

/**
 * Reads the `APIMessage` variants from api-types and builds payloads from their types.
 */
export function loadMessageVariants(): MessageVariant[] {
	const file = join(import.meta.dirname, 'fixture-types.ts');
	const program = ts.createProgram([file], {
		strict: true,
		noEmit: true,
		skipLibCheck: true,
		target: ts.ScriptTarget.ESNext,
		module: ts.ModuleKind.ESNext,
		moduleResolution: ts.ModuleResolutionKind.Bundler,
	});
	const checker = program.getTypeChecker();
	const source = program.getSourceFile(file)!;
	const alias = source.statements.find(ts.isTypeAliasDeclaration)!;
	const union = checker.getTypeFromTypeNode(alias.type);
	if (!union.isUnion()) throw new Error('APIMessage is expected to be a union');

	const isPrimitive = (type: ts.Type) =>
		Boolean(type.flags & (ts.TypeFlags.StringLike | ts.TypeFlags.NumberLike | ts.TypeFlags.BooleanLike));

	function generate(type: ts.Type, seed: number, depth: number): unknown {
		if (type.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null | ts.TypeFlags.Void | ts.TypeFlags.Never)) {
			return undefined;
		}
		if (type.isStringLiteral() || type.isNumberLiteral()) return type.value;
		if (type.flags & ts.TypeFlags.BooleanLiteral) return (type as { intrinsicName?: string }).intrinsicName === 'true';
		if (type.isUnion()) {
			const members = type.types.filter((t) => !(t.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)));
			if (members.every((t) => t.flags & ts.TypeFlags.BooleanLiteral)) return true;
			// Deep inside recursive types, prefer a member that ends the recursion.
			const pick =
				depth > MAX_DEPTH ? (members.find(isPrimitive) ?? members[0]!) : members[(seed + depth) % members.length]!;
			return generate(pick, seed, depth + 1);
		}
		if (type.flags & ts.TypeFlags.StringLike) return 'text';
		if (type.flags & ts.TypeFlags.NumberLike) return 1;
		if (type.flags & ts.TypeFlags.BooleanLike) return true;
		if (type.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) return {};
		if (checker.isTupleType(type)) {
			return checker.getTypeArguments(type as ts.TypeReference).map((t) => generate(t, seed, depth + 1));
		}
		if (checker.isArrayType(type)) {
			if (depth > MAX_DEPTH) return [];
			const element = checker.getTypeArguments(type as ts.TypeReference)[0]!;
			// The first array of a union holds every member, so each variant gets built at least once.
			if (element.isUnion() && !expanded.has(element)) {
				expanded.add(element);
				return element.types
					.filter((t) => !(t.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)))
					.map((t) => generate(t, seed, depth + 1));
			}
			return [generate(element, seed, depth + 1)];
		}

		const result: Record<string, unknown> = {};
		for (const property of checker.getPropertiesOfType(type)) {
			const optional = Boolean(property.flags & ts.SymbolFlags.Optional);
			if (optional && depth > MAX_OPTIONAL_DEPTH) continue;
			const value = generate(checker.getTypeOfSymbol(property), seed, depth + 1);
			if (value !== undefined) result[property.name] = value;
		}
		return result;
	}

	let expanded = new Set<ts.Type>();

	return union.types.map((type) => ({
		name: (type.aliasSymbol ?? type.getSymbol())!.name,
		build(seed) {
			expanded = new Set();
			return generate(type, seed, 0) as Record<string, unknown>;
		},
	}));
}

const dataProperty = Symbol.for('@telescript/structure::data');

/** A structure as `walk` sees it: anything carrying the structures data symbol. */
export interface WalkedStructure {
	readonly constructor: Function;
}

/**
 * Calls every getter of every structure reachable from `root` and hands each structure to `check`. Returns the
 * getters that threw or returned `undefined`. Structures are recognized by their data symbol, not `instanceof`, so a
 * second copy of the package can't make the walk silently skip everything.
 */
export function walk(root: unknown, check: (structure: WalkedStructure, path: string) => void) {
	const problems: string[] = [];
	const seen = new Set<object>();

	function visit(value: unknown, path: string) {
		if (Array.isArray(value)) return value.forEach((item, index) => visit(item, `${path}[${index}]`));
		if (typeof value !== 'object' || value === null || !(dataProperty in value) || seen.has(value)) return;
		seen.add(value);
		check(value, path);

		const getters = new Set<string>();
		for (
			let proto = Object.getPrototypeOf(value);
			proto && proto !== Object.prototype && Object.hasOwn(proto, 'constructor');
			proto = Object.getPrototypeOf(proto)
		) {
			for (const [name, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(proto))) {
				if (descriptor.get && name !== 'client') getters.add(name);
			}
		}

		for (const name of getters) {
			let result: unknown;
			try {
				result = (value as Record<string, unknown>)[name];
			} catch (error) {
				problems.push(`${path}.${name} threw: ${(error as Error).message}`);
				continue;
			}
			if (result === undefined) problems.push(`${path}.${name} returned undefined`);
			visit(result, `${path}.${name}`);
		}
	}

	visit(root, 'message');
	return problems;
}
