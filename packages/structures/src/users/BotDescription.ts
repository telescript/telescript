import { APIBotDescription } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BotDescription extends Structure<APIBotDescription> {
	public get description() {
		return this[Structure.DataProperty].description;
	}
}
