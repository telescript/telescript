import { APIMessageAutoDeleteTimerChanged } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class MessageAutoDeleteTimerChanged extends Structure<APIMessageAutoDeleteTimerChanged> {
	public get messageAutoDeleteTime() {
		return this[Structure.DataProperty].message_auto_delete_time;
	}
}
