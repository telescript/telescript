import { APIStoryAreaPosition } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class StoryAreaPosition extends Structure<APIStoryAreaPosition> {
	public get xPercentage() {
		return this[Structure.DataProperty].x_percentage;
	}

	public get yPercentage() {
		return this[Structure.DataProperty].y_percentage;
	}

	public get widthPercentage() {
		return this[Structure.DataProperty].width_percentage;
	}

	public get heightPercentage() {
		return this[Structure.DataProperty].height_percentage;
	}

	public get rotationAngle() {
		return this[Structure.DataProperty].rotation_angle;
	}

	public get cornerRadiusPercentage() {
		return this[Structure.DataProperty].corner_radius_percentage;
	}
}
