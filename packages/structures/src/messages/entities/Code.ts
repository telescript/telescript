import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class CodeMessageEntity extends BaseMessageEntity<MessageEntityType.Code> {
	public isCode(): this is CodeMessageEntity {
		return true;
	}
}
