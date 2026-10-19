import { createStructure, type Resolve } from '../registry.js';
import { APIMessageReactionUpdated } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';
import { createReactionType } from '../reactions/index.js';

export class MessageReactionUpdated extends Structure<APIMessageReactionUpdated> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get messageId() {
		return this[Structure.DataProperty].message_id;
	}

	public get user(): Resolve<'User'> | null {
		const data = this[Structure.DataProperty].user;
		return data ? createStructure(this[Structure.OwnerProperty], 'User', data) : null;
	}

	public get actorChat() {
		const data = this[Structure.DataProperty].actor_chat;
		return data ? createChat(data, this[Structure.OwnerProperty]) : null;
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

	public get oldReaction() {
		return this[Structure.DataProperty].old_reaction.map((reaction) =>
			createReactionType(reaction, this[Structure.OwnerProperty]),
		);
	}

	public get newReaction() {
		return this[Structure.DataProperty].new_reaction.map((reaction) =>
			createReactionType(reaction, this[Structure.OwnerProperty]),
		);
	}
}
