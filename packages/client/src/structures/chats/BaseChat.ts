import { APIChat, ChatType } from '@telescript/api-types';
import { BaseChat as ParentBaseChat } from '@telescript/structures';
import { ClientMixin } from '../ClientMixin.js';
import { ChatActions } from './actions/ChatActions.js';

export interface BaseChat<Type extends ChatType, Data extends APIChat.FromType<Type> = APIChat.FromType<Type>>
	extends ClientMixin, ChatActions<Type, Data> {}

export class BaseChat<
	Type extends ChatType,
	Data extends APIChat.FromType<Type> = APIChat.FromType<Type>,
> extends ParentBaseChat<Type, Data> {
	static {
		this.mixin(ClientMixin, ChatActions);
	}
}
