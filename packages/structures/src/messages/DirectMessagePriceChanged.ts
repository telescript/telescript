import { APIDirectMessagePriceChanged } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class DirectMessagePriceChanged extends Structure<APIDirectMessagePriceChanged> {
	public get areDirectMessagesEnabled() {
		return this[Structure.DataProperty].are_direct_messages_enabled;
	}

	public get directMessageStarCount() {
		return this[Structure.DataProperty].direct_message_star_count ?? null;
	}
}
