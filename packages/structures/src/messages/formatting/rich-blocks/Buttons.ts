import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class ButtonsRichBlock extends BaseRichBlock<RichBlockType.Buttons> {
	public isButtons(): this is Resolve<'ButtonsRichBlock'> {
		return true;
	}

	public get buttons(): Resolve<'RichMessageButton'>[] {
		return this[Structure.DataProperty].buttons.map((button) =>
			createStructure(this[Structure.OwnerProperty], 'RichMessageButton', button),
		);
	}

	public get align() {
		return this[Structure.DataProperty].align ?? null;
	}
}
