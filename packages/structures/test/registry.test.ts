import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { getRegisteredStructures, Structure } from '../dist/index.js';

const dist = join(import.meta.dirname, '..', 'dist');
const registered = getRegisteredStructures();
const names = new Set(Object.keys(registered));

describe('structures registry', () => {
	it('registers every nested structure under its class name', () => {
		expect(names.size).toBeGreaterThan(300);
		for (const [name, Class] of Object.entries(registered)) {
			expect(Class?.name, name).toBe(name);
			expect(Class?.prototype, name).toBeInstanceOf(Structure);
		}
	});

	// A getter whose declared type names a class directly would keep that class in the client too:
	// the type must go through Resolve<'Name'> or an alias built from it.
	it('declarations never return a registered class directly', () => {
		const offenders: string[] = [];
		const files = readdirSync(dist, { recursive: true, encoding: 'utf8' }).filter((file) => file.endsWith('.d.ts'));

		for (const file of files) {
			const text = readFileSync(join(dist, file), 'utf8');
			for (const match of text.matchAll(/^\s+(?:get )?(\w+)(?:<[^>]*>)?\([^)]*\):\s*([^;{]+);/gm)) {
				const type = match[2]!.replace(/Resolve<'[^']*'>/g, '').replace(/import\("[^"]*"\)\./g, '');
				for (const word of type.match(/(?<![\w$.'])[A-Za-z_$][\w$]*/g) ?? []) {
					if (names.has(word)) offenders.push(`${file}: ${match[1]}(): ${match[2]!.trim()}`);
				}
			}
		}

		expect(offenders).toEqual([]);
	});
});
