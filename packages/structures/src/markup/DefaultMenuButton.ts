import type { Resolve } from '../registry.js';
import { MenuButtonType } from '@telescript/api-types';
import { BaseMenuButton } from './BaseMenuButton.js';

export class DefaultMenuButton extends BaseMenuButton<MenuButtonType.Default> {
	public isDefault(): this is Resolve<'DefaultMenuButton'> {
		return true;
	}
}
