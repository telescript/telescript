import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { PhoneNumberMessageEntity as ParentPhoneNumberMessageEntity } from '@telescript/structures';

export interface PhoneNumberMessageEntity extends ParentPhoneNumberMessageEntity {}

export class PhoneNumberMessageEntity extends BaseMessageEntity<MessageEntityType.PhoneNumber> {
	static {
		this.mixin(ParentPhoneNumberMessageEntity);
	}
}
