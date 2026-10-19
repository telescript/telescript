import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class MigrateFromChatMessage extends BaseMessage<MessageType.MigrateFromChat> {
	public get migrateFromChatId() {
		return this[Structure.DataProperty].migrate_from_chat_id;
	}

	public get type(): MessageType.MigrateFromChat {
		return MessageType.MigrateFromChat;
	}

	public isMigrateFromChat(): this is Resolve<'MigrateFromChatMessage'> {
		return true;
	}
}
