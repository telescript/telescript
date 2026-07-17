import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';

export class URLMessageEntity extends BaseMessageEntity<MessageEntityType.URL> {
	public isURL(): this is URLMessageEntity {
		return true;
	}
}
