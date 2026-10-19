import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import type { Resolve } from '../../../registry.js';

export class MathematicalExpressionRichText extends BaseRichText<RichTextType.MathematicalExpression> {
	public isMathematicalExpression(): this is Resolve<'MathematicalExpressionRichText'> {
		return true;
	}

	public get expression() {
		return this[Structure.DataProperty].expression;
	}
}
