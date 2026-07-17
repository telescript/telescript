import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { CustomEmojiMessageEntity as ParentCustomEmojiMessageEntity } from '@telescript/structures';

export interface CustomEmojiMessageEntity extends ParentCustomEmojiMessageEntity {}

export class CustomEmojiMessageEntity extends BaseMessageEntity<MessageEntityType.CustomEmoji> {
	static {
		this.mixin(ParentCustomEmojiMessageEntity);
	}
}
