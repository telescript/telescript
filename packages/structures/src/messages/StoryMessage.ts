import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class StoryMessage extends BaseMessage<MessageType.Story> {
	public get story(): Resolve<'Story'> {
		return createStructure(this[Structure.OwnerProperty], 'Story', this[Structure.DataProperty].story);
	}

	public get type(): MessageType.Story {
		return MessageType.Story;
	}

	public isStory(): this is Resolve<'StoryMessage'> {
		return true;
	}
}
