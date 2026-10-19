import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class CodeMessageEntity extends BaseMessageEntity<MessageEntityType.Code> {
	public isCode(): this is Resolve<'CodeMessageEntity'> {
		return true;
	}
}
