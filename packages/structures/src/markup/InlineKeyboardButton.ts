import { createStructure, type Resolve } from '../registry.js';
import { APIInlineKeyboardButton } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class InlineKeyboardButton extends Structure<APIInlineKeyboardButton> {
	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get iconCustomEmojiId() {
		return this[Structure.DataProperty].icon_custom_emoji_id ?? null;
	}

	public get style() {
		return this[Structure.DataProperty].style ?? null;
	}

	public get url() {
		return this[Structure.DataProperty].url ?? null;
	}

	public get callbackData() {
		return this[Structure.DataProperty].callback_data ?? null;
	}

	public get webApp(): Resolve<'WebAppInfo'> | null {
		const data = this[Structure.DataProperty].web_app;
		return data ? createStructure(this[Structure.OwnerProperty], 'WebAppInfo', data) : null;
	}

	public get loginURL(): Resolve<'LoginURL'> | null {
		const data = this[Structure.DataProperty].login_url;
		return data ? createStructure(this[Structure.OwnerProperty], 'LoginURL', data) : null;
	}

	public get switchInlineQuery() {
		return this[Structure.DataProperty].switch_inline_query ?? null;
	}

	public get switchInlineQueryCurrentChat() {
		return this[Structure.DataProperty].switch_inline_query_current_chat ?? null;
	}

	public get switchInlineQueryChosenChat(): Resolve<'SwitchInlineQueryChosenChat'> | null {
		const data = this[Structure.DataProperty].switch_inline_query_chosen_chat;
		return data ? createStructure(this[Structure.OwnerProperty], 'SwitchInlineQueryChosenChat', data) : null;
	}

	public get copyText(): Resolve<'CopyTextButton'> | null {
		const data = this[Structure.DataProperty].copy_text;
		return data ? createStructure(this[Structure.OwnerProperty], 'CopyTextButton', data) : null;
	}

	public get callbackGame(): Resolve<'CallbackGame'> | null {
		const data = this[Structure.DataProperty].callback_game;
		return data ? createStructure(this[Structure.OwnerProperty], 'CallbackGame', data) : null;
	}

	public get pay() {
		return this[Structure.DataProperty].pay ?? false;
	}

	public get disabled(): Resolve<'DisabledButton'> | null {
		const data = this[Structure.DataProperty].disabled;
		return data ? createStructure(this[Structure.OwnerProperty], 'DisabledButton', data) : null;
	}
}
