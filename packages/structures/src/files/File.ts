import { APIFile } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { BaseFile } from './BaseFile.js';

export class File extends BaseFile<APIFile> {
	public get size() {
		return this[Structure.DataProperty].file_size ?? null;
	}

	public get path() {
		return this[Structure.DataProperty].file_path ?? null;
	}
}
