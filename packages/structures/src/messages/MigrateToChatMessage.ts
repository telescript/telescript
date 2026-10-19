import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class MigrateToChatMessage extends BaseMessage<MessageType.MigrateToChat> {
	public get migrateToChatId() {
		return this[Structure.DataProperty].migrate_to_chat_id;
	}

	public get type(): MessageType.MigrateToChat {
		return MessageType.MigrateToChat;
	}

	public isMigrateToChat(): this is Resolve<'MigrateToChatMessage'> {
		return true;
	}
}
