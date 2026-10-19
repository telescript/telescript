import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class AnimationRichBlock extends BaseRichBlock<RichBlockType.Animation> {
	public isAnimation(): this is Resolve<'AnimationRichBlock'> {
		return true;
	}

	public get animation(): Resolve<'Animation'> {
		return createStructure(this[Structure.OwnerProperty], 'Animation', this[Structure.DataProperty].animation);
	}

	public get hasSpoiler() {
		return this[Structure.DataProperty].has_spoiler ?? false;
	}

	public get caption(): Resolve<'RichBlockCaption'> | null {
		const data = this[Structure.DataProperty].caption;
		return data ? createStructure(this[Structure.OwnerProperty], 'RichBlockCaption', data) : null;
	}
}
