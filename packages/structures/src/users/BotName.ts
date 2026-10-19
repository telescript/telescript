import { APIBotName } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class BotName extends Structure<APIBotName> {
	public get name() {
		return this[Structure.DataProperty].name;
	}
}
