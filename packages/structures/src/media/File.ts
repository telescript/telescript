import { APIFile } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class File extends Structure<APIFile> {
	public get id() {
		return this[Structure.DataProperty].file_id;
	}

	public get uniqueId() {
		return this[Structure.DataProperty].file_unique_id;
	}

	public get size() {
		return this[Structure.DataProperty].file_size ?? null;
	}

	public get path() {
		return this[Structure.DataProperty].file_path ?? null;
	}
}
