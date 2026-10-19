import { createStructure, defaultOwner, type StructureOwner } from '../registry.js';
import { APIStoryAreaType, StoryAreaType } from '@telescript/api-types';
import type { StoryAreaTypeStructure } from './types.js';

export function createStoryAreaType(
	data: APIStoryAreaType,
	owner: StructureOwner = defaultOwner,
): StoryAreaTypeStructure {
	switch (data.type) {
		case StoryAreaType.Location:
			return createStructure(owner, 'LocationStoryAreaType', data);
		case StoryAreaType.SuggestedReaction:
			return createStructure(owner, 'SuggestedReactionStoryAreaType', data);
		case StoryAreaType.Link:
			return createStructure(owner, 'LinkStoryAreaType', data);
		case StoryAreaType.Weather:
			return createStructure(owner, 'WeatherStoryAreaType', data);
		case StoryAreaType.UniqueGift:
			return createStructure(owner, 'UniqueGiftStoryAreaType', data);
		default:
			return createStructure(owner, 'BaseStoryAreaType', data);
	}
}
