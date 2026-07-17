import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class UnderlineMessageEntity extends BaseMessageEntity<MessageEntityType.Underline> {
	public isUnderline(): this is UnderlineMessageEntity {
		return true;
	}
}
