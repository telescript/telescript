import { APIMessageEntity, MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity as ParentBaseMessageEntity } from '@telescript/structures';
import { Client } from '../../../client/index.js';

export class BaseMessageEntity<
	Type extends MessageEntityType,
	Data extends APIMessageEntity.FromType<Type> = APIMessageEntity.FromType<Type>,
> extends ParentBaseMessageEntity<Type, Data> {
	public constructor(
		public client: Client,
		data: Data,
		text: string,
	) {
		super(data, text);
	}
}
