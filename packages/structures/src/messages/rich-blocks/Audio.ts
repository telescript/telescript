import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { Audio } from '../../media/Audio.js';
import { RichBlockCaption } from './RichBlockCaption.js';

export class AudioRichBlock extends BaseRichBlock<RichBlockType.Audio> {
	public isAudio(): this is AudioRichBlock {
		return true;
	}

	public get audio() {
		return new Audio(this[Structure.DataProperty].audio);
	}

	public get caption() {
		const data = this[Structure.DataProperty].caption;
		return data ? new RichBlockCaption(data) : null;
	}
}
