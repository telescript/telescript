import { APIChat, ChatType } from '@telescript/api-types';
import { BaseChat as ParentBaseChat } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { SendTextAction } from './actions/SendTextAction.js';

export interface BaseChat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends SendTextAction<Type, Data> {}

export class BaseChat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends ParentBaseChat<Type, Data> {
	static {
		this.mixin(SendTextAction);
	}

	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}
}
