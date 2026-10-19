import type { Resolve } from '../../../registry.js';
import { BackgroundFillSolid, BackgroundFillType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseBackgroundFill } from './BaseBackgroundFill.js';

export class SolidBackgroundFill extends BaseBackgroundFill<BackgroundFillType.Solid, BackgroundFillSolid> {
	public isSolid(): this is Resolve<'SolidBackgroundFill'> {
		return true;
	}

	public get color() {
		return this[Structure.DataProperty].color;
	}
}
