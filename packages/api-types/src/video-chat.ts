import { APIUser } from './user.js';

export interface APIVideoChatScheduled {
	start_date: number;
}

export interface APIVideoChatStarted {}

export interface APIVideoChatEnded {
	duration: number;
}

export interface APIVideoChatParticipantsInvited {
	users: APIUser[];
}
