import { createStructure, type Resolve } from '../registry.js';
import { APIStoryArea } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createStoryAreaType } from './createStoryAreaType.js';

export class StoryArea extends Structure<APIStoryArea> {
	public get position(): Resolve<'StoryAreaPosition'> {
		return createStructure(this[Structure.OwnerProperty], 'StoryAreaPosition', this[Structure.DataProperty].position);
	}

	public get type() {
		return createStoryAreaType(this[Structure.DataProperty].type, this[Structure.OwnerProperty]);
	}
}
