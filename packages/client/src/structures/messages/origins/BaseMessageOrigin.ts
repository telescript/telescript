import { APIMessageOrigin, MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin as ParentBaseMessageOrigin } from '@telescript/structures';
import { Client } from '../../../client';

export class BaseMessageOrigin<
	Type extends MessageOriginType = MessageOriginType,
	Data extends APIMessageOrigin.FromType<Type> = APIMessageOrigin.FromType<Type>,
> extends ParentBaseMessageOrigin<Type, Data> {
	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}
}
