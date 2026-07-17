import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { Voice } from '../../media/Voice.js';
import { RichBlockCaption } from './RichBlockCaption.js';

export class VoiceNoteRichBlock extends BaseRichBlock<RichBlockType.VoiceNote> {
	public isVoiceNote(): this is VoiceNoteRichBlock {
		return true;
	}

	public get voiceNote() {
		return new Voice(this[Structure.DataProperty].voice_note);
	}

	public get caption() {
		const data = this[Structure.DataProperty].caption;
		return data ? new RichBlockCaption(data) : null;
	}
}
