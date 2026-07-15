import { APIPassportFile } from '@telescript/api-types';
import { BaseFile } from './BaseFile.js';
import { PassportFile as ParentPassportFile } from '@telescript/structures';

export interface PassportFile extends ParentPassportFile {}

export class PassportFile extends BaseFile<APIPassportFile> {
	static {
		this.mixin(ParentPassportFile);
	}
}
