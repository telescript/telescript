import { APIMaskPosition } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class MaskPosition extends Structure<APIMaskPosition> {
	public get point() {
		return this[Structure.DataProperty].point;
	}

	public get xShift() {
		return this[Structure.DataProperty].x_shift;
	}

	public get yShift() {
		return this[Structure.DataProperty].y_shift;
	}

	public get scale() {
		return this[Structure.DataProperty].scale;
	}
}
