import { APIPassportFile } from '@telescript/api-types';
import { BaseFile } from './BaseFile';
import { Structure } from '../Structure';

export class PassportFile extends BaseFile<APIPassportFile> {
	public get size() {
		return this[Structure.DataProperty].file_size;
	}

	public get uploadUnixTimestamp() {
		return this[Structure.DataProperty].file_date;
	}

	public get uploadTimestamp() {
		return this.uploadUnixTimestamp * 1000;
	}

	public get uploadDate() {
		return new Date(this.uploadTimestamp);
	}
}
