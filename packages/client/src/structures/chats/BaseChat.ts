import { APIChat, ChatType } from '@telescript/api-types';
import { BaseChat as ParentBaseChat } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { ChatForwardMessageAction, ChatForwardMessagesAction, ChatSendTextAction } from './actions/index.js';

export interface BaseChat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
>
	extends ChatForwardMessageAction<Type, Data>, ChatForwardMessagesAction<Type, Data>, ChatSendTextAction<Type, Data> {}

export class BaseChat<
	Type extends ChatType = ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends ParentBaseChat<Type, Data> {
	static {
		this.mixin(ChatForwardMessageAction, ChatForwardMessagesAction, ChatSendTextAction);
	}

	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}
}
