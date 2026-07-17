import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { Animation } from '../../media/Animation.js';
import { RichBlockCaption } from './RichBlockCaption.js';

export class AnimationRichBlock extends BaseRichBlock<RichBlockType.Animation> {
	public isAnimation(): this is AnimationRichBlock {
		return true;
	}

	public get animation() {
		return new Animation(this[Structure.DataProperty].animation);
	}

	public get hasSpoiler() {
		return this[Structure.DataProperty].has_spoiler ?? false;
	}

	public get caption() {
		const data = this[Structure.DataProperty].caption;
		return data ? new RichBlockCaption(data) : null;
	}
}
