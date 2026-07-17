import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { BotCommandMessageEntity as ParentBotCommandMessageEntity } from '@telescript/structures';

export interface BotCommandMessageEntity extends ParentBotCommandMessageEntity {}

export class BotCommandMessageEntity extends BaseMessageEntity<MessageEntityType.BotCommand> {
	static {
		this.mixin(ParentBotCommandMessageEntity);
	}
}
