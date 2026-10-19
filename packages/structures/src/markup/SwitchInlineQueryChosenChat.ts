import { APISwitchInlineQueryChosenChat } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class SwitchInlineQueryChosenChat extends Structure<APISwitchInlineQueryChosenChat> {
	public get query() {
		return this[Structure.DataProperty].query ?? null;
	}

	public get allowUserChats() {
		return this[Structure.DataProperty].allow_user_chats ?? false;
	}

	public get allowBotChats() {
		return this[Structure.DataProperty].allow_bot_chats ?? false;
	}

	public get allowGroupChats() {
		return this[Structure.DataProperty].allow_group_chats ?? false;
	}

	public get allowChannelChats() {
		return this[Structure.DataProperty].allow_channel_chats ?? false;
	}
}
