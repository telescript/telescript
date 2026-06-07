import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { Structure } from '../../Structure.js';

export class PreviewPaidMedia extends BasePaidMedia<PaidMediaType.Preview> {
	public isPreview(): this is PreviewPaidMedia {
		return true;
	}

	public get width() {
		return this[Structure.DataProperty].width ?? null;
	}

	public get height() {
		return this[Structure.DataProperty].height ?? null;
	}

	public get duration() {
		return this[Structure.DataProperty].duration ?? null;
	}
}
