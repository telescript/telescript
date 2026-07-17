import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { SpoilerMessageEntity as ParentSpoilerMessageEntity } from '@telescript/structures';

export interface SpoilerMessageEntity extends ParentSpoilerMessageEntity {}

export class SpoilerMessageEntity extends BaseMessageEntity<MessageEntityType.Spoiler> {
	static {
		this.mixin(ParentSpoilerMessageEntity);
	}
}
