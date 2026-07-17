import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { Video } from '../../media/Video.js';
import { RichBlockCaption } from './RichBlockCaption.js';

export class VideoRichBlock extends BaseRichBlock<RichBlockType.Video> {
	public isVideo(): this is VideoRichBlock {
		return true;
	}

	public get video() {
		return new Video(this[Structure.DataProperty].video);
	}

	public get hasSpoiler() {
		return this[Structure.DataProperty].has_spoiler ?? false;
	}

	public get caption() {
		const data = this[Structure.DataProperty].caption;
		return data ? new RichBlockCaption(data) : null;
	}
}
