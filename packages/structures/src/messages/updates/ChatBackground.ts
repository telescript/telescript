import { APIChatBackground } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class ChatBackground extends Structure<APIChatBackground> {
	public get type() {
		return this[Structure.DataProperty].type;
	}
}
