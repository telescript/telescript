import { UniqueGiftInfo as ParentUniqueGiftInfo, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIUniqueGiftInfo } from '@telescript/api-types';
import { UniqueGift } from './UniqueGift.js';

export class UniqueGiftInfo extends ParentUniqueGiftInfo {
	public constructor(
		public client: Client,
		data: APIUniqueGiftInfo,
	) {
		super(data);
	}

	public override get gift() {
		return new UniqueGift(this.client, this[Structure.DataProperty].gift);
	}
}
