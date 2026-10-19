import type { Resolve } from '../registry.js';
import { APIStoryAreaType, StoryAreaType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { BaseStoryAreaType } from './BaseStoryAreaType.js';

export class UniqueGiftStoryAreaType extends BaseStoryAreaType<StoryAreaType.UniqueGift, APIStoryAreaType.UniqueGift> {
	public isUniqueGift(): this is Resolve<'UniqueGiftStoryAreaType'> {
		return true;
	}

	public get name() {
		return this[Structure.DataProperty].name;
	}
}
