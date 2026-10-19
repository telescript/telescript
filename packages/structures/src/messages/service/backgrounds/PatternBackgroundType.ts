import { createStructure, type Resolve } from '../../../registry.js';
import { APIBackgroundTypePattern, BackgroundTypeType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseBackgroundType } from './BaseBackgroundType.js';
import { createBackgroundFill } from './createBackgroundFill.js';

export class PatternBackgroundType extends BaseBackgroundType<BackgroundTypeType.Pattern, APIBackgroundTypePattern> {
	public isPattern(): this is Resolve<'PatternBackgroundType'> {
		return true;
	}

	public get document(): Resolve<'Document'> {
		return createStructure(this[Structure.OwnerProperty], 'Document', this[Structure.DataProperty].document);
	}

	public get fill() {
		return createBackgroundFill(this[Structure.DataProperty].fill, this[Structure.OwnerProperty]);
	}

	public get intensity() {
		return this[Structure.DataProperty].intensity;
	}

	public get isInverted() {
		return this[Structure.DataProperty].is_inverted ?? false;
	}

	public get isMoving() {
		return this[Structure.DataProperty].is_moving ?? false;
	}
}
