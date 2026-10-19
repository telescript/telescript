import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class ButtonRichText extends BaseRichText<RichTextType.Button> {
	public isButton(): this is Resolve<'ButtonRichText'> {
		return true;
	}

	public get button(): Resolve<'RichMessageButton'> {
		return createStructure(this[Structure.OwnerProperty], 'RichMessageButton', this[Structure.DataProperty].button);
	}
}
