import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { Structure } from '../../Structure.js';

export class DateTimeMessageEntity extends BaseMessageEntity<MessageEntityType.DateTime> {
	public isDateTime(): this is DateTimeMessageEntity {
		return true;
	}

	public get unixTimestamp() {
		return this[Structure.DataProperty].unix_time;
	}

	public get timestamp() {
		return this.unixTimestamp * 1000;
	}

	public get date() {
		return new Date(this.timestamp);
	}

	public get dateTimeFormat() {
		return this[Structure.DataProperty].date_time_format ?? null;
	}
}
