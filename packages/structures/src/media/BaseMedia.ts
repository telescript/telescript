import { MediaBase } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BaseMedia<Data extends MediaBase> extends Structure<Data> {
	public get fileId() {
		return this[Structure.DataProperty].file_id;
	}

	public get fileUniqueId() {
		return this[Structure.DataProperty].file_unique_id;
	}
}
