import { createStructure, type Resolve } from '../registry.js';
import { APIGame } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createMessageEntity } from '../messages/formatting/entities/index.js';

export class Game extends Structure<APIGame> {
	public get title() {
		return this[Structure.DataProperty].title;
	}

	public get description() {
		return this[Structure.DataProperty].description;
	}

	public get photo(): Resolve<'PhotoSize'>[] {
		return (
			this[Structure.DataProperty].photo.map((data) =>
				createStructure(this[Structure.OwnerProperty], 'PhotoSize', data),
			) ?? null
		);
	}

	public get text() {
		return this[Structure.DataProperty].text ?? null;
	}

	public get textEntities() {
		const data = this[Structure.DataProperty].text_entities;
		return data
			? data.map((data) => createMessageEntity(data, this[Structure.DataProperty].text!, this[Structure.OwnerProperty]))
			: null;
	}

	public get animation(): Resolve<'Animation'> | null {
		const data = this[Structure.DataProperty].animation;
		return data ? createStructure(this[Structure.OwnerProperty], 'Animation', data) : null;
	}
}
