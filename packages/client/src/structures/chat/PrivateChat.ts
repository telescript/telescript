import { ChatType } from '@telescript/api-types';
import { Chat } from './Chat.js';
import { PrivateChat as ParentPrivateChat } from '@telescript/structures';

export interface PrivateChat extends ParentPrivateChat {}

export class PrivateChat extends Chat<ChatType.Private> {
	static {
		this.mixin(ParentPrivateChat);
	}
}
