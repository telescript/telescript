import { ChatType } from '@telescript/api-types';
import { ChannelChat as ParentChannelChat } from '@telescript/structures';
import { ClientMixin } from '../ClientMixin.js';
import { ChatActions } from './actions/ChatActions.js';

export interface ChannelChat extends ClientMixin, ChatActions<ChatType.Channel> {}

export class ChannelChat extends ParentChannelChat {
	static {
		this.mixin(ClientMixin, ChatActions);
	}
}
