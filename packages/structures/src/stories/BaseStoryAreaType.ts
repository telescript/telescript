import type { Resolve } from '../registry.js';
import { APIStoryAreaType, StoryAreaType } from '@telescript/api-types';
import { Structure } from '../Structure.js';

type StoryAreaTypeData<Type extends StoryAreaType> = Extract<APIStoryAreaType, { type: Type }>;

export class BaseStoryAreaType<
	Type extends StoryAreaType,
	Data extends StoryAreaTypeData<Type> = StoryAreaTypeData<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isLocation(): this is Resolve<'LocationStoryAreaType'> {
		return false;
	}

	public isSuggestedReaction(): this is Resolve<'SuggestedReactionStoryAreaType'> {
		return false;
	}

	public isLink(): this is Resolve<'LinkStoryAreaType'> {
		return false;
	}

	public isWeather(): this is Resolve<'WeatherStoryAreaType'> {
		return false;
	}

	public isUniqueGift(): this is Resolve<'UniqueGiftStoryAreaType'> {
		return false;
	}
}
