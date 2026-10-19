import { APIChatPhoto } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class ChatPhoto extends Structure<APIChatPhoto> {
	public get smallFileId() {
		return this[Structure.DataProperty].small_file_id;
	}

	public get smallFileUniqueId() {
		return this[Structure.DataProperty].small_file_unique_id;
	}

	public get bigFileId() {
		return this[Structure.DataProperty].big_file_id;
	}

	public get bigFileUniqueId() {
		return this[Structure.DataProperty].big_file_unique_id;
	}
}
