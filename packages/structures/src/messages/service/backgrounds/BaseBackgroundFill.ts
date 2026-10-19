import type { Resolve } from '../../../registry.js';
import { APIBackgroundFill, BackgroundFillType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';

export class BaseBackgroundFill<
	Type extends BackgroundFillType,
	Data extends { type: Type } = Extract<APIBackgroundFill, { type: Type }>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isSolid(): this is Resolve<'SolidBackgroundFill'> {
		return false;
	}

	public isGradient(): this is Resolve<'GradientBackgroundFill'> {
		return false;
	}

	public isFreeformGradient(): this is Resolve<'FreeformGradientBackgroundFill'> {
		return false;
	}
}
