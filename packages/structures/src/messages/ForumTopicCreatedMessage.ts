import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ForumTopicCreatedMessage extends BaseMessage<MessageType.ForumTopicCreated> {
	public get forumTopicCreated(): Resolve<'ForumTopicCreated'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ForumTopicCreated',
			this[Structure.DataProperty].forum_topic_created,
		);
	}

	public get type(): MessageType.ForumTopicCreated {
		return MessageType.ForumTopicCreated;
	}

	public isForumTopicCreated(): this is Resolve<'ForumTopicCreatedMessage'> {
		return true;
	}
}
