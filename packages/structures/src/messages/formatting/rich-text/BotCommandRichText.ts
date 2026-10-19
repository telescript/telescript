import { RichTextType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichText } from './BaseRichText.js';
import { createRichText } from './createRichText.js';
import type { Resolve } from '../../../registry.js';

export class BotCommandRichText extends BaseRichText<RichTextType.BotCommand> {
	public isBotCommand(): this is Resolve<'BotCommandRichText'> {
		return true;
	}

	public get text() {
		return createRichText(this[Structure.DataProperty].text, this[Structure.OwnerProperty]);
	}

	public get botCommand() {
		return this[Structure.DataProperty].bot_command;
	}
}
