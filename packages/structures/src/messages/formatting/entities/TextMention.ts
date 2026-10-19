import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { Structure } from '../../../Structure.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class TextMentionMessageEntity extends BaseMessageEntity<MessageEntityType.TextMention> {
	public isTextMention(): this is Resolve<'TextMentionMessageEntity'> {
		return true;
	}

	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}
}
