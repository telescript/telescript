import type { Resolve } from '../../../registry.js';
import { APIBackgroundTypeFill, BackgroundTypeType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseBackgroundType } from './BaseBackgroundType.js';
import { createBackgroundFill } from './createBackgroundFill.js';

export class FillBackgroundType extends BaseBackgroundType<BackgroundTypeType.Fill, APIBackgroundTypeFill> {
	public isFill(): this is Resolve<'FillBackgroundType'> {
		return true;
	}

	public get fill() {
		return createBackgroundFill(this[Structure.DataProperty].fill, this[Structure.OwnerProperty]);
	}

	public get darkThemeDimming() {
		return this[Structure.DataProperty].dark_theme_dimming;
	}
}
