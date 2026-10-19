import { createStructure, type Resolve } from '../registry.js';
import { APIInlineQuery } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class InlineQuery extends Structure<APIInlineQuery> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get from(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].from);
	}

	public get query() {
		return this[Structure.DataProperty].query;
	}

	public get offset() {
		return this[Structure.DataProperty].offset;
	}

	public get chatType() {
		return this[Structure.DataProperty].chat_type;
	}

	public get location(): Resolve<'Location'> | null {
		const data = this[Structure.DataProperty].location;
		return data ? createStructure(this[Structure.OwnerProperty], 'Location', data) : null;
	}
}
