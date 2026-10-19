import { APIVideoChatParticipantsInvited } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createStructure, type Resolve } from '../../registry.js';

export class VideoChatParticipantsInvited extends Structure<APIVideoChatParticipantsInvited> {
	public get users(): Resolve<'User'>[] {
		return this[Structure.DataProperty].users.map((data) =>
			createStructure(this[Structure.OwnerProperty], 'User', data),
		);
	}
}
