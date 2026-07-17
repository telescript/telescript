import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';

export class MathematicalExpressionRichBlock extends BaseRichBlock<RichBlockType.MathematicalExpression> {
	public isMathematicalExpression(): this is MathematicalExpressionRichBlock {
		return true;
	}

	public get expression() {
		return this[Structure.DataProperty].expression;
	}
}
