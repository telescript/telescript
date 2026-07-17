import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class EmailMessageEntity extends BaseMessageEntity<MessageEntityType.Email> {
	public isEmail(): this is EmailMessageEntity {
		return true;
	}
}
