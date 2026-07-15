import { APIFile } from '@telescript/api-types';
import { BaseFile } from './BaseFile.js';
import { File as ParentFile } from '@telescript/structures';

export interface File extends ParentFile {}

export class File extends BaseFile<APIFile> {
	static {
		this.mixin(ParentFile);
	}
}
