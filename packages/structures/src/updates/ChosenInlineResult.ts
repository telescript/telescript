import { createStructure, type Resolve } from '../registry.js';
import { APIChosenInlineResult } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class ChosenInlineResult extends Structure<APIChosenInlineResult> {
	public get resultId() {
		return this[Structure.DataProperty].result_id;
	}

	public get from(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].from);
	}

	public get location(): Resolve<'Location'> | null {
		const data = this[Structure.DataProperty].location;
		return data ? createStructure(this[Structure.OwnerProperty], 'Location', data) : null;
	}

	public get inlineMessageId() {
		return this[Structure.DataProperty].inline_message_id ?? null;
	}

	public get query() {
		return this[Structure.DataProperty].query;
	}
}
