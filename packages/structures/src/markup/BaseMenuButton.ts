import type { Resolve } from '../registry.js';
import { APIMenuButton, MenuButtonType } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BaseMenuButton<
	Type extends MenuButtonType,
	Data extends APIMenuButton.FromType<Type> = APIMenuButton.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isCommands(): this is Resolve<'CommandsMenuButton'> {
		return false;
	}

	public isWebApp(): this is Resolve<'WebAppMenuButton'> {
		return false;
	}

	public isDefault(): this is Resolve<'DefaultMenuButton'> {
		return false;
	}
}
