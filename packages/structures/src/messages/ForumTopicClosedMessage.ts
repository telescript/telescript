import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ForumTopicClosedMessage extends BaseMessage<MessageType.ForumTopicClosed> {
	public get forumTopicClosed(): Resolve<'ForumTopicClosed'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ForumTopicClosed',
			this[Structure.DataProperty].forum_topic_closed,
		);
	}

	public get type(): MessageType.ForumTopicClosed {
		return MessageType.ForumTopicClosed;
	}

	public isForumTopicClosed(): this is Resolve<'ForumTopicClosedMessage'> {
		return true;
	}
}
