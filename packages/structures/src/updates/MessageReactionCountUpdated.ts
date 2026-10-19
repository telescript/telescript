import { createStructure, type Resolve } from '../registry.js';
import { APIMessageReactionCountUpdated } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';

export class MessageReactionCountUpdated extends Structure<APIMessageReactionCountUpdated> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get messageId() {
		return this[Structure.DataProperty].message_id;
	}

	public get unixTimestamp() {
		return this[Structure.DataProperty].date;
	}

	public get timestamp() {
		return this.unixTimestamp * 1000;
	}

	public get date() {
		return new Date(this.timestamp);
	}

	public get reactions(): Resolve<'ReactionCount'>[] {
		return this[Structure.DataProperty].reactions.map((reaction) =>
			createStructure(this[Structure.OwnerProperty], 'ReactionCount', reaction),
		);
	}
}
