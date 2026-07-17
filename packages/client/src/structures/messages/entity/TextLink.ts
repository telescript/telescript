import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { TextLinkMessageEntity as ParentTextLinkMessageEntity } from '@telescript/structures';

export interface TextLinkMessageEntity extends ParentTextLinkMessageEntity {}

export class TextLinkMessageEntity extends BaseMessageEntity<MessageEntityType.TextLink> {
	static {
		this.mixin(ParentTextLinkMessageEntity);
	}
}
