import { APIBotShortDescription } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BotShortDescription extends Structure<APIBotShortDescription> {
	public get shortDescription() {
		return this[Structure.DataProperty].short_description;
	}
}
