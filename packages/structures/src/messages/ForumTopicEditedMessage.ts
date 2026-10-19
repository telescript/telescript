import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ForumTopicEditedMessage extends BaseMessage<MessageType.ForumTopicEdited> {
	public get forumTopicEdited(): Resolve<'ForumTopicEdited'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ForumTopicEdited',
			this[Structure.DataProperty].forum_topic_edited,
		);
	}

	public get type(): MessageType.ForumTopicEdited {
		return MessageType.ForumTopicEdited;
	}

	public isForumTopicEdited(): this is Resolve<'ForumTopicEditedMessage'> {
		return true;
	}
}
