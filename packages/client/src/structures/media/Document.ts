import { APIDocument } from '@telescript/api-types';
import { BaseMedia } from './BaseMedia.js';
import { Document as ParentDocument } from '@telescript/structures';

export interface Document extends ParentDocument {}

export class Document extends BaseMedia<APIDocument> {
	static {
		this.mixin(ParentDocument);
	}
}
