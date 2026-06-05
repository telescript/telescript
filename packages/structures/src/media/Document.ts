import { APIDocument } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { DescribedMediaMixin, ThumbnailedMediaMixin } from './mixins/index.js';

export interface Document extends ThumbnailedMediaMixin<APIDocument>, DescribedMediaMixin<APIDocument> {}

export class Document extends BaseMedia<APIDocument> {
	static {
		this.mixin(ThumbnailedMediaMixin, DescribedMediaMixin);
	}
}
