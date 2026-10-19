import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class EmailAddressRichText extends BaseRichText<RichTextType.EmailAddress> {
	public isEmailAddress(): this is Resolve<'EmailAddressRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get emailAddress() {
		return this[Structure.DataProperty].email_address;
	}
}
