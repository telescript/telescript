import { PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { PreviewPaidMedia as ParentPreviewPaidMedia } from '@telescript/structures';

export interface PreviewPaidMedia extends ParentPreviewPaidMedia {}

export class PreviewPaidMedia extends BasePaidMedia<PaidMediaType.Preview> {
	static {
		this.mixin(ParentPreviewPaidMedia);
	}
}
