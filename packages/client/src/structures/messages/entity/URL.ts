import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { URLMessageEntity as ParentURLMessageEntity } from '@telescript/structures';

export interface URLMessageEntity extends ParentURLMessageEntity {}

export class URLMessageEntity extends BaseMessageEntity<MessageEntityType.URL> {
	static {
		this.mixin(ParentURLMessageEntity);
	}
}
