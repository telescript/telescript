import { ChatType } from '@telescript/api-types';
import { GroupChat as ParentGroupChat } from '@telescript/structures';
import { ClientMixin } from '../ClientMixin.js';
import { ChatActions } from './actions/ChatActions.js';

export interface GroupChat extends ClientMixin, ChatActions<ChatType.Group> {}

export class GroupChat extends ParentGroupChat {
	static {
		this.mixin(ClientMixin, ChatActions);
	}
}
