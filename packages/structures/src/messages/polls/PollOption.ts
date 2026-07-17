import { APIPollOption } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessageEntity } from '../entities/index.js';
import { PollMedia } from './PollMedia.js';
import { User } from '../../users/User.js';
import { createChat } from '../../chats/index.js';

export class PollOption extends Structure<APIPollOption> {
	public get persistentId() {
		return this[Structure.DataProperty].persistent_id;
	}

	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get textEntities() {
		const data = this[Structure.DataProperty].text_entities;
		return data ? data.map((entity) => createMessageEntity(entity, this.text)) : null;
	}

	public get media() {
		const data = this[Structure.DataProperty].media;
		return data ? new PollMedia(data) : null;
	}

	public get voterCount() {
		return this[Structure.DataProperty].voter_count;
	}

	public get addedByUser() {
		const data = this[Structure.DataProperty].added_by_user;
		return data ? new User(data) : null;
	}

	public get addedByChat() {
		const data = this[Structure.DataProperty].added_by_chat;
		return data ? createChat(data) : null;
	}

	public get additionUnixTimestamp() {
		return this[Structure.DataProperty].addition_date ?? null;
	}

	public get additionTimestamp() {
		const ts = this[Structure.DataProperty].addition_date;
		return ts ? ts * 1000 : null;
	}

	public get additionDate() {
		const ts = this[Structure.DataProperty].addition_date;
		return ts ? new Date(ts * 1000) : null;
	}
}
