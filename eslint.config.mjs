// @ts-check
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
	{ ignores: ['**/dist/', '**/node_modules/', '.claude/'] },
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		// Package sources are covered by a tsconfig, so they also get the rules that need type information.
		files: ['packages/*/src/**/*.ts'],
		extends: [tseslint.configs.recommendedTypeChecked],
		languageOptions: {
			parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
		},
	},
	{
		// After the presets, which would turn these back on.
		rules: {
			// api-types groups related types in namespaces (`APIMessage.Text`, `APIMethod.SendMessage.Params`).
			'@typescript-eslint/no-namespace': 'off',
			// Mixins: an interface declares what `Structure.mixin()` adds to the class of the same name.
			'@typescript-eslint/no-unsafe-declaration-merging': 'off',
			// Empty interfaces mirror empty Bot API objects and combine mixin interfaces.
			'@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
		},
	},
	{
		// Type tests reference members (`message.photo;`) only to check that they exist.
		files: ['packages/*/test/**/*.ts'],
		rules: {
			'@typescript-eslint/no-unused-expressions': 'off',
			// Tests compare classes by identity.
			'@typescript-eslint/no-unsafe-function-type': 'off',
		},
	},
	{
		files: ['**/*.mjs'],
		languageOptions: { globals: { console: 'readonly', process: 'readonly', fetch: 'readonly' } },
	},
	// Last: turns off the rules that Prettier's formatting would conflict with.
	prettier,
);
