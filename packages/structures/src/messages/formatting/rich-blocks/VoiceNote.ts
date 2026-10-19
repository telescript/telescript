import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class VoiceNoteRichBlock extends BaseRichBlock<RichBlockType.VoiceNote> {
	public isVoiceNote(): this is Resolve<'VoiceNoteRichBlock'> {
		return true;
	}

	public get voiceNote(): Resolve<'Voice'> {
		return createStructure(this[Structure.OwnerProperty], 'Voice', this[Structure.DataProperty].voice_note);
	}

	public get caption(): Resolve<'RichBlockCaption'> | null {
		const data = this[Structure.DataProperty].caption;
		return data ? createStructure(this[Structure.OwnerProperty], 'RichBlockCaption', data) : null;
	}
}
