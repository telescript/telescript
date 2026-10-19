import { createStructure, type Resolve } from '../registry.js';
import { MenuButtonType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { BaseMenuButton } from './BaseMenuButton.js';

export class WebAppMenuButton extends BaseMenuButton<MenuButtonType.WebApp> {
	public isWebApp(): this is Resolve<'WebAppMenuButton'> {
		return true;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get webApp(): Resolve<'WebAppInfo'> {
		return createStructure(this[Structure.OwnerProperty], 'WebAppInfo', this[Structure.DataProperty].web_app);
	}
}
