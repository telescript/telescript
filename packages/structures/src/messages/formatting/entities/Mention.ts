import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class MentionMessageEntity extends BaseMessageEntity<MessageEntityType.Mention> {
	public isMention(): this is Resolve<'MentionMessageEntity'> {
		return true;
	}
}
