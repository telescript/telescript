import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { Structure } from '../../Structure.js';

export class CustomEmojiMessageEntity extends BaseMessageEntity<MessageEntityType.CustomEmoji> {
	public isCustomEmoji(): this is CustomEmojiMessageEntity {
		return true;
	}

	public get customEmojiId() {
		return this[Structure.DataProperty].custom_emoji_id;
	}
}
