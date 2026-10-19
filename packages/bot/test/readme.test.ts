import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import ts from 'typescript';
import { expect, it } from 'vitest';

// The README example is what most people copy first: it must compile against the built packages.
it('the README example compiles', () => {
	const readme = readFileSync(join(import.meta.dirname, '../../../README.md'), 'utf8');
	const example = readme.match(/```ts\n([\s\S]*?)```/)?.[1];
	expect(example).toBeDefined();

	// A virtual file inside this package, so `@telescript/bot` resolves to it through the `exports` self-reference.
	const file = join(import.meta.dirname, 'readme-example.ts').replaceAll('\\', '/');
	const source = `declare const TOKEN: string;\n${example}`;
	const options: ts.CompilerOptions = {
		strict: true,
		noEmit: true,
		skipLibCheck: true,
		target: ts.ScriptTarget.ESNext,
		module: ts.ModuleKind.NodeNext,
		moduleResolution: ts.ModuleResolutionKind.NodeNext,
		types: ['node'],
	};
	const host = ts.createCompilerHost(options);
	const { getSourceFile, fileExists, readFile } = host;
	host.getSourceFile = (name, ...rest) =>
		name === file ? ts.createSourceFile(name, source, ts.ScriptTarget.ESNext) : getSourceFile(name, ...rest);
	host.fileExists = (name) => name === file || fileExists(name);
	host.readFile = (name) => (name === file ? source : readFile(name));

	const program = ts.createProgram([file], options, host);
	const diagnostics = ts
		.getPreEmitDiagnostics(program)
		.map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));

	expect(diagnostics).toEqual([]);
});
