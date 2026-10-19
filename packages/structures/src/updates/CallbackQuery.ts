import { createStructure, type Resolve } from '../registry.js';
import { APICallbackQuery } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createMaybeInaccessibleMessage } from '../messages/createMaybeInaccessibleMessage.js';

export class CallbackQuery extends Structure<APICallbackQuery> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get from(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].from);
	}

	public get message(): Resolve<'InaccessibleMessage'> | Resolve<'BaseMessage'> | null {
		const data = this[Structure.DataProperty].message;
		return data ? createMaybeInaccessibleMessage(data, this[Structure.OwnerProperty]) : null;
	}

	public get inlineMessageId() {
		return this[Structure.DataProperty].inline_message_id ?? null;
	}

	public get chatInstance() {
		return this[Structure.DataProperty].chat_instance;
	}

	public get data() {
		return this[Structure.DataProperty].data ?? null;
	}

	public get gameShortName() {
		return this[Structure.DataProperty].game_short_name ?? null;
	}
}
