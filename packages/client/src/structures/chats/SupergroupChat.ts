import { ChatType } from '@telescript/api-types';
import { Chat } from './Chat.js';
import { SupergroupChat as ParentSupergroupChat } from '@telescript/structures';

export interface SupergroupChat extends ParentSupergroupChat {}

export class SupergroupChat extends Chat<ChatType.Supergroup> {
	static {
		this.mixin(ParentSupergroupChat);
	}
}
