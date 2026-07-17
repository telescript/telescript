import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { Structure } from '../../Structure.js';
import { User } from '../../users/User.js';

export class TextMentionMessageEntity extends BaseMessageEntity<MessageEntityType.TextMention> {
	public isTextMention(): this is TextMentionMessageEntity {
		return true;
	}

	public get user() {
		return new User(this[Structure.DataProperty].user);
	}
}
