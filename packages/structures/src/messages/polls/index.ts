import { registerStructures } from '../../registry.js';
import { Poll } from './Poll.js';
import { PollMedia } from './PollMedia.js';
import { PollOption } from './PollOption.js';
import { PollOptionAdded } from './PollOptionAdded.js';
import { PollOptionDeleted } from './PollOptionDeleted.js';
export * from './Poll.js';
export * from './PollMedia.js';
export * from './PollOption.js';
export * from './PollOptionAdded.js';
export * from './PollOptionDeleted.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		Poll: Poll;
		PollMedia: PollMedia;
		PollOption: PollOption;
		PollOptionAdded: PollOptionAdded;
		PollOptionDeleted: PollOptionDeleted;
	}
}

registerStructures({ Poll, PollMedia, PollOption, PollOptionAdded, PollOptionDeleted });
