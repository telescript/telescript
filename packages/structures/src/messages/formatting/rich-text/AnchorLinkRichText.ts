import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class AnchorLinkRichText extends BaseRichText<RichTextType.AnchorLink> {
	public isAnchorLink(): this is Resolve<'AnchorLinkRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get anchorName() {
		return this[Structure.DataProperty].anchor_name;
	}
}
