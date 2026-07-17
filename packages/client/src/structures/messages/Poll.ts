import { Poll as ParentPoll, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIPoll } from '@telescript/api-types';
import { createMessageEntity } from './entity/index.js';
import { PollMedia } from './PollMedia.js';

export interface Poll extends ParentPoll {}

export class Poll extends ParentPoll {
	public constructor(
		public client: Client,
		data: APIPoll,
	) {
		super(data);
	}

	public get questionEntities() {
		const data = this[Structure.DataProperty].question_entities;
		return data
			? data.map((entity) => createMessageEntity(this.client, entity, this[Structure.DataProperty].question))
			: null;
	}

	public get explanationEntities() {
		const data = this[Structure.DataProperty].explanation_entities;
		return data
			? data.map((entity) => createMessageEntity(this.client, entity, this[Structure.DataProperty].explanation ?? ''))
			: null;
	}

	public get explanationMedia() {
		const data = this[Structure.DataProperty].explanation_media;
		return data ? new PollMedia(this.client, data) : null;
	}

	public get descriptionEntities() {
		const data = this[Structure.DataProperty].description_entities;
		return data
			? data.map((entity) => createMessageEntity(this.client, entity, this[Structure.DataProperty].description ?? ''))
			: null;
	}

	public get media() {
		const data = this[Structure.DataProperty].media;
		return data ? new PollMedia(this.client, data) : null;
	}
}
