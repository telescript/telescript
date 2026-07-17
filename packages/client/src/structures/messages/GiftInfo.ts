import { GiftInfo as ParentGiftInfo, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIGiftInfo } from '@telescript/api-types';
import { Gift } from './Gift.js';
import { createMessageEntity } from './entity/index.js';

export class GiftInfo extends ParentGiftInfo {
	public constructor(
		public client: Client,
		data: APIGiftInfo,
	) {
		super(data);
	}

	public get gift() {
		return new Gift(this.client, this[Structure.DataProperty].gift);
	}

	public get entities() {
		const data = this[Structure.DataProperty].entities;
		return data ? data.map((entity) => createMessageEntity(this.client, entity, this.text ?? '')) : null;
	}
}
