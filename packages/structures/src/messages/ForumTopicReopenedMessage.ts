import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ForumTopicReopenedMessage extends BaseMessage<MessageType.ForumTopicReopened> {
	public get forumTopicReopened(): Resolve<'ForumTopicReopened'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ForumTopicReopened',
			this[Structure.DataProperty].forum_topic_reopened,
		);
	}

	public get type(): MessageType.ForumTopicReopened {
		return MessageType.ForumTopicReopened;
	}

	public isForumTopicReopened(): this is Resolve<'ForumTopicReopenedMessage'> {
		return true;
	}
}
