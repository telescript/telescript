import { APIChat, ChatType } from '@telescript/api-types';
import { Chat as ParentChat } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { SendTextAction } from './actions/SendTextAction.js';

export interface Chat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends SendTextAction<Type, Data> {}

export class Chat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends ParentChat<Type, Data> {
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
