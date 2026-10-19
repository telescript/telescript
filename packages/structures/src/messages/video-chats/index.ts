import { registerStructures } from '../../registry.js';
import { VideoChatEnded } from './VideoChatEnded.js';
import { VideoChatParticipantsInvited } from './VideoChatParticipantsInvited.js';
import { VideoChatScheduled } from './VideoChatScheduled.js';
import { VideoChatStarted } from './VideoChatStarted.js';
export * from './VideoChatEnded.js';
export * from './VideoChatParticipantsInvited.js';
export * from './VideoChatScheduled.js';
export * from './VideoChatStarted.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		VideoChatEnded: VideoChatEnded;
		VideoChatParticipantsInvited: VideoChatParticipantsInvited;
		VideoChatScheduled: VideoChatScheduled;
		VideoChatStarted: VideoChatStarted;
	}
}

registerStructures({ VideoChatEnded, VideoChatParticipantsInvited, VideoChatScheduled, VideoChatStarted });
