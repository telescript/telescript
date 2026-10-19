import type { Resolve } from '../registry.js';
import { MenuButtonType } from '@telescript/api-types';
import { BaseMenuButton } from './BaseMenuButton.js';

export class CommandsMenuButton extends BaseMenuButton<MenuButtonType.Commands> {
	public isCommands(): this is Resolve<'CommandsMenuButton'> {
		return true;
	}
}
