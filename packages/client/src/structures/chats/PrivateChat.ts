import { ChatType } from '@telescript/api-types';
import { BaseChat } from './BaseChat.js';
import { PrivateChat as ParentPrivateChat } from '@telescript/structures';

export interface PrivateChat extends ParentPrivateChat {}

export class PrivateChat extends BaseChat<ChatType.Private> {
	static {
		this.mixin(ParentPrivateChat);
	}
}
