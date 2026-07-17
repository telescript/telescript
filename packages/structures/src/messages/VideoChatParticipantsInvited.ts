import { APIVideoChatParticipantsInvited } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { User } from '../users/User.js';

export class VideoChatParticipantsInvited extends Structure<APIVideoChatParticipantsInvited> {
	public get users() {
		return this[Structure.DataProperty].users.map((data) => new User(data));
	}
}
