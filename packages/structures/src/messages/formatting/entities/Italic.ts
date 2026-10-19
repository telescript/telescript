import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class ItalicMessageEntity extends BaseMessageEntity<MessageEntityType.Italic> {
	public isItalic(): this is Resolve<'ItalicMessageEntity'> {
		return true;
	}
}
