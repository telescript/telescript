import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class PhoneNumberRichText extends BaseRichText<RichTextType.PhoneNumber> {
	public isPhoneNumber(): this is Resolve<'PhoneNumberRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get phoneNumber() {
		return this[Structure.DataProperty].phone_number;
	}
}
