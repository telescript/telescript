import { FileBase } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BaseFile<Data extends FileBase> extends Structure<Data> {
	public get id() {
		return this[Structure.DataProperty].file_id;
	}

	public get uniqueId() {
		return this[Structure.DataProperty].file_unique_id;
	}
}
