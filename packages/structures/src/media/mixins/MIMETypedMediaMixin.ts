import { MediaBase, MIMETypedMediaBase } from '@telescript/api-types';
import { BaseMedia } from '../BaseMedia.js';
import { Structure } from '../../Structure.js';

export class MIMETypedMediaMixin<Data extends MediaBase & MIMETypedMediaBase> extends BaseMedia<Data> {
	public get mimeType() {
		return this[Structure.DataProperty].mime_type ?? null;
	}
}
