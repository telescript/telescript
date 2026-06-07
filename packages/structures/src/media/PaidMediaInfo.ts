import { APIPaidMediaInfo } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createPaidMedia } from './paid/index.js';

export class PaidMediaInfo extends Structure<APIPaidMediaInfo> {
	public get starCount() {
		return this[Structure.DataProperty].star_count;
	}

	public get paidMedia() {
		return this[Structure.DataProperty].paid_media.map((data) => createPaidMedia(data));
	}
}
