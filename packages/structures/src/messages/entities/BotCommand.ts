import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class BotCommandMessageEntity extends BaseMessageEntity<MessageEntityType.BotCommand> {
	public isBotCommand(): this is BotCommandMessageEntity {
		return true;
	}

	public get command() {
		return this.text.slice(1).split('@')[0]!;
	}

	public get botUsername() {
		return this.text.split('@')[1] ?? null;
	}
}
