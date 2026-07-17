import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { Structure } from '../../Structure.js';

export class TextLinkMessageEntity extends BaseMessageEntity<MessageEntityType.TextLink> {
	public isTextLink(): this is TextLinkMessageEntity {
		return true;
	}

	public get url() {
		return this[Structure.DataProperty].url;
	}
}
