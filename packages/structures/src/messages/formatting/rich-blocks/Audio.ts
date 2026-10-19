import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class AudioRichBlock extends BaseRichBlock<RichBlockType.Audio> {
	public isAudio(): this is Resolve<'AudioRichBlock'> {
		return true;
	}

	public get audio(): Resolve<'Audio'> {
		return createStructure(this[Structure.OwnerProperty], 'Audio', this[Structure.DataProperty].audio);
	}

	public get caption(): Resolve<'RichBlockCaption'> | null {
		const data = this[Structure.DataProperty].caption;
		return data ? createStructure(this[Structure.OwnerProperty], 'RichBlockCaption', data) : null;
	}
}
