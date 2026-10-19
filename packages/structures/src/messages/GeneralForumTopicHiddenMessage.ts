import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GeneralForumTopicHiddenMessage extends BaseMessage<MessageType.GeneralForumTopicHidden> {
	public get generalForumTopicHidden(): Resolve<'GeneralForumTopicHidden'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'GeneralForumTopicHidden',
			this[Structure.DataProperty].general_forum_topic_hidden,
		);
	}

	public get type(): MessageType.GeneralForumTopicHidden {
		return MessageType.GeneralForumTopicHidden;
	}

	public isGeneralForumTopicHidden(): this is Resolve<'GeneralForumTopicHiddenMessage'> {
		return true;
	}
}
