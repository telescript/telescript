import { createStructure, defaultOwner, registerStructures, type StructureOwner, type Resolve } from '../registry.js';
import { CopyTextButton } from './CopyTextButton.js';
import { DisabledButton } from './DisabledButton.js';
import { InlineKeyboardButton } from './InlineKeyboardButton.js';
import { InlineKeyboardMarkup } from './InlineKeyboardMarkup.js';
import { LoginURL } from './LoginURL.js';
import { SwitchInlineQueryChosenChat } from './SwitchInlineQueryChosenChat.js';
import { WebAppInfo } from './WebAppInfo.js';
import { APIMenuButton, MenuButtonType } from '@telescript/api-types';
import { BaseMenuButton } from './BaseMenuButton.js';
import { CommandsMenuButton } from './CommandsMenuButton.js';
import { WebAppMenuButton } from './WebAppMenuButton.js';
import { DefaultMenuButton } from './DefaultMenuButton.js';

export * from './BaseMenuButton.js';
export * from './ChatAdministratorRights.js';
export * from './CommandsMenuButton.js';
export * from './CopyTextButton.js';
export * from './DefaultMenuButton.js';
export * from './DisabledButton.js';
export * from './InlineKeyboardButton.js';
export * from './InlineKeyboardMarkup.js';
export * from './LoginURL.js';
export * from './PreparedInlineMessage.js';
export * from './PreparedKeyboardButton.js';
export * from './SwitchInlineQueryChosenChat.js';
export * from './WebAppInfo.js';
export * from './WebAppMenuButton.js';

export type MenuButton =
	| Resolve<'BaseMenuButton'>
	| Resolve<'CommandsMenuButton'>
	| Resolve<'WebAppMenuButton'>
	| Resolve<'DefaultMenuButton'>;

export function createMenuButton(data: APIMenuButton, owner: StructureOwner = defaultOwner): MenuButton {
	switch (data.type) {
		case MenuButtonType.Commands:
			return createStructure(owner, 'CommandsMenuButton', data);
		case MenuButtonType.WebApp:
			return createStructure(owner, 'WebAppMenuButton', data);
		case MenuButtonType.Default:
			return createStructure(owner, 'DefaultMenuButton', data);
		default:
			return createStructure(owner, 'BaseMenuButton', data);
	}
}

declare module '../registry.js' {
	interface DefaultTypes {
		BaseMenuButton: BaseMenuButton<never>;
		CommandsMenuButton: CommandsMenuButton;
		CopyTextButton: CopyTextButton;
		DefaultMenuButton: DefaultMenuButton;
		DisabledButton: DisabledButton;
		InlineKeyboardButton: InlineKeyboardButton;
		InlineKeyboardMarkup: InlineKeyboardMarkup;
		LoginURL: LoginURL;
		SwitchInlineQueryChosenChat: SwitchInlineQueryChosenChat;
		WebAppInfo: WebAppInfo;
		WebAppMenuButton: WebAppMenuButton;
	}
}

registerStructures({
	BaseMenuButton,
	CommandsMenuButton,
	CopyTextButton,
	DefaultMenuButton,
	DisabledButton,
	InlineKeyboardButton,
	InlineKeyboardMarkup,
	LoginURL,
	SwitchInlineQueryChosenChat,
	WebAppInfo,
	WebAppMenuButton,
});
