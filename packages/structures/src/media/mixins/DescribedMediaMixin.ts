import { DescribedMediaBase, MediaBase } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { MIMETypedMediaMixin } from './MIMETypedMediaMixin.js';

export class DescribedMediaMixin<Data extends MediaBase & DescribedMediaBase> extends MIMETypedMediaMixin<Data> {
	public get fileName() {
		return this[Structure.DataProperty].file_name ?? null;
	}
}
