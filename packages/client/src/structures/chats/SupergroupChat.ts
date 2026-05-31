import { ChatType } from '@telescript/api-types';
import { BaseChat } from './BaseChat.js';
import { SupergroupChat as ParentSupergroupChat } from '@telescript/structures';

export interface SupergroupChat extends ParentSupergroupChat {}

export class SupergroupChat extends BaseChat<ChatType.Supergroup> {
	static {
		this.mixin(ParentSupergroupChat);
	}
}
