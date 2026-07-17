import { APIGame } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { PhotoSize } from '../../media/PhotoSize.js';
import { createMessageEntity } from '../entities/index.js';
import { Animation } from '../../media/Animation.js';

export class Game extends Structure<APIGame> {
	public get title() {
		return this[Structure.DataProperty].title;
	}

	public get description() {
		return this[Structure.DataProperty].description;
	}

	public get photo() {
		return this[Structure.DataProperty].photo.map((data) => new PhotoSize(data)) ?? null;
	}

	public get text() {
		return this[Structure.DataProperty].text ?? null;
	}

	public get textEntities() {
		const data = this[Structure.DataProperty].text_entities;
		return data ? data.map((data) => createMessageEntity(data, this[Structure.DataProperty].text!)) : null;
	}

	public get animation() {
		const data = this[Structure.DataProperty].animation;
		return data ? new Animation(data) : null;
	}
}
