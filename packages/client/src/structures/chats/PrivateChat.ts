import { ChatType } from '@telescript/api-types';
import { PrivateChat as ParentPrivateChat } from '@telescript/structures';
import { ClientMixin } from '../ClientMixin.js';
import { ChatActions } from './actions/ChatActions.js';

export interface PrivateChat extends ClientMixin, ChatActions<ChatType.Private> {}

export class PrivateChat extends ParentPrivateChat {
	static {
		this.mixin(ClientMixin, ChatActions);
	}
}
