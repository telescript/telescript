import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import type { Resolve } from '../../../registry.js';

export class SpoilerMessageEntity extends BaseMessageEntity<MessageEntityType.Spoiler> {
	public isSpoiler(): this is Resolve<'SpoilerMessageEntity'> {
		return true;
	}
}
