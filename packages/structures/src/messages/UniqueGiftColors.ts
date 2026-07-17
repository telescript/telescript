import { APIUniqueGiftColors } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class UniqueGiftColors extends Structure<APIUniqueGiftColors> {
	public get modelCustomEmojiId() {
		return this[Structure.DataProperty].model_custom_emoji_id;
	}

	public get symbolCustomEmojiId() {
		return this[Structure.DataProperty].symbol_custom_emoji_id;
	}

	public get lightThemeMainColor() {
		return this[Structure.DataProperty].light_theme_main_color;
	}

	public get lightThemeOtherColors() {
		return this[Structure.DataProperty].light_theme_other_colors;
	}

	public get darkThemeMainColor() {
		return this[Structure.DataProperty].dark_theme_main_color;
	}

	public get darkThemeOtherColors() {
		return this[Structure.DataProperty].dark_theme_other_colors;
	}
}
