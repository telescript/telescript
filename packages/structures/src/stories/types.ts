import type { Resolve } from '../registry.js';

export type StoryAreaTypeStructure =
	| Resolve<'BaseStoryAreaType'>
	| Resolve<'LocationStoryAreaType'>
	| Resolve<'SuggestedReactionStoryAreaType'>
	| Resolve<'LinkStoryAreaType'>
	| Resolve<'WeatherStoryAreaType'>
	| Resolve<'UniqueGiftStoryAreaType'>;
