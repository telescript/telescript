import { APIDocument } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { DescribedMediaMixin, SizedMediaMixin, ThumbnailedMediaMixin } from './mixins/index.js';

export interface Document
	extends SizedMediaMixin<APIDocument>, ThumbnailedMediaMixin<APIDocument>, DescribedMediaMixin<APIDocument> {}

export class Document extends BaseMedia<APIDocument> {
	static {
		this.mixin(SizedMediaMixin, ThumbnailedMediaMixin, DescribedMediaMixin);
	}
}
