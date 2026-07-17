import { Game as ParentGame, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIGame } from '@telescript/api-types';
import { Animation, PhotoSize } from '../media/index.js';
import { createMessageEntity } from './entity/index.js';

export interface Game extends ParentGame {}

export class Game extends ParentGame {
	public constructor(
		public client: Client,
		data: APIGame,
	) {
		super(data);
	}

	public get photo() {
		return this[Structure.DataProperty].photo.map((item) => new PhotoSize(this.client, item));
	}

	public get textEntities() {
		const data = this[Structure.DataProperty].text_entities;
		return data
			? data.map((entity) => createMessageEntity(this.client, entity, this[Structure.DataProperty].text!))
			: null;
	}

	public get animation() {
		const data = this[Structure.DataProperty].animation;
		return data ? new Animation(this.client, data) : null;
	}
}
