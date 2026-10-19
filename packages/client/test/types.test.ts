import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { expect, it } from 'vitest';

const tsc = createRequire(import.meta.url).resolve('typescript/bin/tsc');

it('client types hold for consumers (test/types/assertions.ts)', () => {
	const result = spawnSync(process.execPath, [tsc, '-p', join(import.meta.dirname, 'types')], { encoding: 'utf8' });
	expect(result.stdout + result.stderr).toBe('');
	expect(result.status).toBe(0);
});
