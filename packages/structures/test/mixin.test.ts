import { describe, expect, it } from 'vitest';
import * as S from '../dist/index.js';

class BaseMixin {
	public get base() {
		return 'base';
	}

	public get overridden() {
		return 'base';
	}
}

class DerivedMixin extends BaseMixin {
	public override get overridden() {
		return 'derived';
	}
}

class OtherMixin {
	public get other() {
		return 'other';
	}

	public get declared() {
		return 'mixin';
	}
}

class Mixed extends S.Structure<null> {
	static {
		this.mixin(DerivedMixin, OtherMixin);
	}

	public get declared() {
		return 'class';
	}
}

describe('Structure.mixin', () => {
	const mixed = new Mixed(null) as Mixed & DerivedMixin & OtherMixin;

	it('copies the members a mixin inherits from another mixin', () => {
		expect(mixed.base).toBe('base');
		expect(mixed.overridden).toBe('derived');
		expect(mixed.other).toBe('other');
	});

	it('keeps the members declared in the class body', () => {
		expect(mixed.declared).toBe('class');
	});

	it('never copies what the class already inherits', () => {
		expect(Object.hasOwn(Mixed.prototype, 'toJSON')).toBe(false);
		expect(Object.hasOwn(Mixed.prototype, 'hasOwnProperty')).toBe(false);
	});

	// `DescribedMediaMixin` extends `MIMETypedMediaMixin`.
	it.each(['Animation', 'Audio', 'Document', 'Video', 'Voice', 'LivePhoto'] as const)('%s has mimeType', (name) => {
		const media = new S[name]({ file_id: 'id', file_unique_id: 'unique', mime_type: 'video/mp4' } as never);

		expect((media as { mimeType?: unknown }).mimeType).toBe('video/mp4');
	});
});
