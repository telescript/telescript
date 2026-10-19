import type { Resolve } from '../../../registry.js';
import { APIBackgroundTypeChatTheme, BackgroundTypeType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseBackgroundType } from './BaseBackgroundType.js';

export class ChatThemeBackgroundType extends BaseBackgroundType<
	BackgroundTypeType.ChatTheme,
	APIBackgroundTypeChatTheme
> {
	public isChatTheme(): this is Resolve<'ChatThemeBackgroundType'> {
		return true;
	}

	public get themeName() {
		return this[Structure.DataProperty].theme_name;
	}
}
