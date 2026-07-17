import { APIVideoChatScheduled } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class VideoChatScheduled extends Structure<APIVideoChatScheduled> {
	public get startUnixTimestamp() {
		return this[Structure.DataProperty].start_date;
	}

	public get startTimestamp() {
		return this.startUnixTimestamp * 1000;
	}

	public get startDate() {
		return new Date(this.startTimestamp);
	}
}
