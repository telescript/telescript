import type { Resolve } from '../../../registry.js';
import { BackgroundFillGradient, BackgroundFillType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseBackgroundFill } from './BaseBackgroundFill.js';

export class GradientBackgroundFill extends BaseBackgroundFill<BackgroundFillType.Gradient, BackgroundFillGradient> {
	public isGradient(): this is Resolve<'GradientBackgroundFill'> {
		return true;
	}

	public get topColor() {
		return this[Structure.DataProperty].top_color;
	}

	public get bottomColor() {
		return this[Structure.DataProperty].bottom_color;
	}

	public get rotationAngle() {
		return this[Structure.DataProperty].rotation_angle;
	}
}
