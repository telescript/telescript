import { APISticker } from '@telescript/api-types';
import { BaseMedia } from '../BaseMedia.js';
import { Sticker as ParentSticker, Structure } from '@telescript/structures';
import { MaskPosition } from './MaskPosition.js';
import { File } from '../../file/File.js';

export interface Sticker extends ParentSticker {}

export class Sticker extends BaseMedia<APISticker> {
	static {
		this.mixin(ParentSticker);
	}

	public get premiumAnimation() {
		const data = this[Structure.DataProperty].premium_animation;
		return data ? new File(this.client, data) : null;
	}

	public get maskPosition() {
		const data = this[Structure.DataProperty].mask_position;
		return data ? new MaskPosition(this.client, data) : null;
	}
}
