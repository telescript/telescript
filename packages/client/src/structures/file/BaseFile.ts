import { FileBase } from '@telescript/api-types';
import { BaseFile as ParentBaseFile } from '@telescript/structures';
import { Client } from '../../client/index.js';

export class BaseFile<Data extends FileBase = FileBase> extends ParentBaseFile<Data> {
	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}
}
