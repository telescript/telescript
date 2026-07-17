import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class ItalicMessageEntity extends BaseMessageEntity<MessageEntityType.Italic> {
	public isItalic(): this is ItalicMessageEntity {
		return true;
	}
}
