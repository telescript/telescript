import { APIPaidMediaInfo } from '@telescript/api-types';
import { PaidMediaInfo as ParentPaidMediaInfo, Structure } from '@telescript/structures';
import { createPaidMedia } from './paid/index.js';
import { Client } from '../../client/Client.js';

export class PaidMediaInfo extends ParentPaidMediaInfo {
	static {
		this.mixin(ParentPaidMediaInfo);
	}

	public constructor(
		public client: Client,
		data: APIPaidMediaInfo,
	) {
		super(data);
	}

	public get paidMedia() {
		return this[Structure.DataProperty].paid_media.map((data) => createPaidMedia(this.client, data));
	}
}
