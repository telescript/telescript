import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GeneralForumTopicUnhiddenMessage extends BaseMessage<MessageType.GeneralForumTopicUnhidden> {
	public get generalForumTopicUnhidden(): Resolve<'GeneralForumTopicUnhidden'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'GeneralForumTopicUnhidden',
			this[Structure.DataProperty].general_forum_topic_unhidden,
		);
	}

	public get type(): MessageType.GeneralForumTopicUnhidden {
		return MessageType.GeneralForumTopicUnhidden;
	}

	public isGeneralForumTopicUnhidden(): this is Resolve<'GeneralForumTopicUnhiddenMessage'> {
		return true;
	}
}
