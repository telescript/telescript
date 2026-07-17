import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { ItalicMessageEntity as ParentItalicMessageEntity } from '@telescript/structures';

export interface ItalicMessageEntity extends ParentItalicMessageEntity {}

export class ItalicMessageEntity extends BaseMessageEntity<MessageEntityType.Italic> {
	static {
		this.mixin(ParentItalicMessageEntity);
	}
}
