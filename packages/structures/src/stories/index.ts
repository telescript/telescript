import { registerStructures } from '../registry.js';
import { BaseStoryAreaType } from './BaseStoryAreaType.js';
import { LinkStoryAreaType } from './LinkStoryAreaType.js';
import { LocationStoryAreaType } from './LocationStoryAreaType.js';
import { Story } from './Story.js';
import { StoryAreaPosition } from './StoryAreaPosition.js';
import { SuggestedReactionStoryAreaType } from './SuggestedReactionStoryAreaType.js';
import { UniqueGiftStoryAreaType } from './UniqueGiftStoryAreaType.js';
import { WeatherStoryAreaType } from './WeatherStoryAreaType.js';
export * from './Story.js';
export * from './StoryAreaPosition.js';
export * from './BaseStoryAreaType.js';
export * from './LocationStoryAreaType.js';
export * from './SuggestedReactionStoryAreaType.js';
export * from './LinkStoryAreaType.js';
export * from './WeatherStoryAreaType.js';
export * from './UniqueGiftStoryAreaType.js';
export * from './StoryArea.js';
export * from './createStoryAreaType.js';
export type { StoryAreaTypeStructure } from './types.js';

declare module '../registry.js' {
	interface DefaultTypes {
		BaseStoryAreaType: BaseStoryAreaType<never>;
		LinkStoryAreaType: LinkStoryAreaType;
		LocationStoryAreaType: LocationStoryAreaType;
		Story: Story;
		StoryAreaPosition: StoryAreaPosition;
		SuggestedReactionStoryAreaType: SuggestedReactionStoryAreaType;
		UniqueGiftStoryAreaType: UniqueGiftStoryAreaType;
		WeatherStoryAreaType: WeatherStoryAreaType;
	}
}

registerStructures({
	BaseStoryAreaType,
	LinkStoryAreaType,
	LocationStoryAreaType,
	Story,
	StoryAreaPosition,
	SuggestedReactionStoryAreaType,
	UniqueGiftStoryAreaType,
	WeatherStoryAreaType,
});
