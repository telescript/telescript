import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class VideoRichBlock extends BaseRichBlock<RichBlockType.Video> {
	public isVideo(): this is Resolve<'VideoRichBlock'> {
		return true;
	}

	public get video(): Resolve<'Video'> {
		return createStructure(this[Structure.OwnerProperty], 'Video', this[Structure.DataProperty].video);
	}

	public get hasSpoiler() {
		return this[Structure.DataProperty].has_spoiler ?? false;
	}

	public get caption(): Resolve<'RichBlockCaption'> | null {
		const data = this[Structure.DataProperty].caption;
		return data ? createStructure(this[Structure.OwnerProperty], 'RichBlockCaption', data) : null;
	}
}
