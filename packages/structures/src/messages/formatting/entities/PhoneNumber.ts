import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class PhoneNumberMessageEntity extends BaseMessageEntity<MessageEntityType.PhoneNumber> {
	public isPhoneNumber(): this is Resolve<'PhoneNumberMessageEntity'> {
		return true;
	}
}
