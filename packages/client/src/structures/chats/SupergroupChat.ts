import { ChatType } from '@telescript/api-types';
import { SupergroupChat as ParentSupergroupChat } from '@telescript/structures';
import { ClientMixin } from '../ClientMixin.js';
import { ChatActions } from './actions/ChatActions.js';

export interface SupergroupChat extends ClientMixin, ChatActions<ChatType.Supergroup> {}

export class SupergroupChat extends ParentSupergroupChat {
	static {
		this.mixin(ClientMixin, ChatActions);
	}
}
