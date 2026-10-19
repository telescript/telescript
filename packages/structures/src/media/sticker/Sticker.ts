import { APISticker } from '@telescript/api-types';
import { BaseMedia } from '../BaseMedia.js';
import { SizedMediaMixin } from '../mixins/SizedMediaMixin.js';
import { SpatialMediaMixin } from '../mixins/SpatialMediaMixin.js';
import { ThumbnailedMediaMixin } from '../mixins/ThumbnailedMediaMixin.js';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export interface Sticker
	extends SizedMediaMixin<APISticker>, SpatialMediaMixin<APISticker>, ThumbnailedMediaMixin<APISticker> {}

export class Sticker extends BaseMedia<APISticker> {
	static {
		this.mixin(SizedMediaMixin, SpatialMediaMixin, ThumbnailedMediaMixin);
	}

	public get type() {
		return this[Structure.DataProperty].type;
	}

	public get isAnimated() {
		return this[Structure.DataProperty].is_animated;
	}

	public get isVideo() {
		return this[Structure.DataProperty].is_video;
	}

	public get emoji() {
		return this[Structure.DataProperty].emoji ?? null;
	}

	public get setName() {
		return this[Structure.DataProperty].set_name ?? null;
	}

	public get premiumAnimation(): Resolve<'File'> | null {
		const data = this[Structure.DataProperty].premium_animation;
		return data ? createStructure(this[Structure.OwnerProperty], 'File', data) : null;
	}

	public get maskPosition(): Resolve<'MaskPosition'> | null {
		const data = this[Structure.DataProperty].mask_position;
		return data ? createStructure(this[Structure.OwnerProperty], 'MaskPosition', data) : null;
	}

	public get customEmojiId() {
		return this[Structure.DataProperty].custom_emoji_id ?? null;
	}

	public get needsRepainting() {
		return this[Structure.DataProperty].needs_repainting ?? null;
	}
}
