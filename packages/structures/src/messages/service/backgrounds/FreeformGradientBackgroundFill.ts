import type { Resolve } from '../../../registry.js';
import { BackgroundFillFreeformGradient } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseBackgroundFill } from './BaseBackgroundFill.js';

export class FreeformGradientBackgroundFill extends BaseBackgroundFill<
	BackgroundFillFreeformGradient['type'],
	BackgroundFillFreeformGradient
> {
	public isFreeformGradient(): this is Resolve<'FreeformGradientBackgroundFill'> {
		return true;
	}

	public get colors() {
		return this[Structure.DataProperty].colors;
	}
}
