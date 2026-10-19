import { createStructure, type Resolve } from '../registry.js';
import { APIInlineKeyboardMarkup } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class InlineKeyboardMarkup extends Structure<APIInlineKeyboardMarkup> {
	public get inlineKeyboard(): Resolve<'InlineKeyboardButton'>[][] {
		return this[Structure.DataProperty].inline_keyboard.map((row) =>
			row.map((button) => createStructure(this[Structure.OwnerProperty], 'InlineKeyboardButton', button)),
		);
	}

	public get forceReply() {
		return this[Structure.DataProperty].force_reply ?? false;
	}
}
