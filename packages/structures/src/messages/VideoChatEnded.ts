import { APIVideoChatEnded } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class VideoChatEnded extends Structure<APIVideoChatEnded> {
	public get duration() {
		return this[Structure.DataProperty].duration;
	}
}
