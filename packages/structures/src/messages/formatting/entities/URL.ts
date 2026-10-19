import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class URLMessageEntity extends BaseMessageEntity<MessageEntityType.URL> {
	public isURL(): this is Resolve<'URLMessageEntity'> {
		return true;
	}
}
