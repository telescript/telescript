import { createStructure, defaultOwner, type StructureOwner } from '../../../registry.js';
import { APIBackgroundFill, BackgroundFillType } from '@telescript/api-types';
import type { BackgroundFill } from './types.js';

export function createBackgroundFill(data: APIBackgroundFill, owner: StructureOwner = defaultOwner): BackgroundFill {
	switch (data.type) {
		case BackgroundFillType.Solid:
			return createStructure(owner, 'SolidBackgroundFill', data);
		case BackgroundFillType.Gradient:
			return createStructure(owner, 'GradientBackgroundFill', data);
		case BackgroundFillType.FreeformGradient:
			return createStructure(owner, 'FreeformGradientBackgroundFill', data);
		default:
			return createStructure(owner, 'BaseBackgroundFill', data);
	}
}
