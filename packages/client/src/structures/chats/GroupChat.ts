import { ChatType } from '@telescript/api-types';
import { BaseChat } from './BaseChat.js';
import { GroupChat as ParentGroupChat } from '@telescript/structures';

export interface GroupChat extends ParentGroupChat {}

export class GroupChat extends BaseChat<ChatType.Group> {
	static {
		this.mixin(ParentGroupChat);
	}
}
