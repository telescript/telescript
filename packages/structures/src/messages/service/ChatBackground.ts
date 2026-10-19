import { APIChatBackground } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createBackgroundType } from './backgrounds/index.js';

export class ChatBackground extends Structure<APIChatBackground> {
	public get type() {
		return createBackgroundType(this[Structure.DataProperty].type, this[Structure.OwnerProperty]);
	}
}
