import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { Structure } from '../../../Structure.js';
import type { Resolve } from '../../../registry.js';

export class TextLinkMessageEntity extends BaseMessageEntity<MessageEntityType.TextLink> {
	public isTextLink(): this is Resolve<'TextLinkMessageEntity'> {
		return true;
	}

	public get url() {
		return this[Structure.DataProperty].url;
	}
}
