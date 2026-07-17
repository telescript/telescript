import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class MentionMessageEntity extends BaseMessageEntity<MessageEntityType.Mention> {
	public isMention(): this is MentionMessageEntity {
		return true;
	}
}
