import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class PhoneNumberMessageEntity extends BaseMessageEntity<MessageEntityType.PhoneNumber> {
	public isPhoneNumber(): this is PhoneNumberMessageEntity {
		return true;
	}
}
