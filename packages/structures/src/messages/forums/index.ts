import { registerStructures } from '../../registry.js';
import { DirectMessagesTopic } from './DirectMessagesTopic.js';
import { ForumTopicClosed } from './ForumTopicClosed.js';
import { ForumTopicCreated } from './ForumTopicCreated.js';
import { ForumTopicEdited } from './ForumTopicEdited.js';
import { ForumTopicReopened } from './ForumTopicReopened.js';
import { GeneralForumTopicHidden } from './GeneralForumTopicHidden.js';
import { GeneralForumTopicUnhidden } from './GeneralForumTopicUnhidden.js';
export * from './DirectMessagesTopic.js';
export * from './ForumTopicClosed.js';
export * from './ForumTopicCreated.js';
export * from './ForumTopicEdited.js';
export * from './ForumTopicReopened.js';
export * from './GeneralForumTopicHidden.js';
export * from './GeneralForumTopicUnhidden.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		DirectMessagesTopic: DirectMessagesTopic;
		ForumTopicClosed: ForumTopicClosed;
		ForumTopicCreated: ForumTopicCreated;
		ForumTopicEdited: ForumTopicEdited;
		ForumTopicReopened: ForumTopicReopened;
		GeneralForumTopicHidden: GeneralForumTopicHidden;
		GeneralForumTopicUnhidden: GeneralForumTopicUnhidden;
	}
}

registerStructures({
	DirectMessagesTopic,
	ForumTopicClosed,
	ForumTopicCreated,
	ForumTopicEdited,
	ForumTopicReopened,
	GeneralForumTopicHidden,
	GeneralForumTopicUnhidden,
});
