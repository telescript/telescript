import { APITextQuote } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createMessageEntity } from './entity/index.js';

export class TextQuote extends Structure<APITextQuote> {
	public get text() {
		return this[Structure.DataProperty].text;
	}

	public get entities() {
		const data = this[Structure.DataProperty].entities;
		return data ? data.map((entity) => createMessageEntity(entity, this.text)) : null;
	}

	public get position() {
		return this[Structure.DataProperty].position;
	}

	public get isManual() {
		return this[Structure.DataProperty].is_manual ?? false;
	}
}
