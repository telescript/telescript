import { MessageOriginType } from '@telescript/api-types';
import { BaseMessageOrigin } from './index.js';
import { HiddenUserMessageOrigin as ParentHiddenUserMessageOrigin } from '@telescript/structures';

export interface HiddenUserMessageOrigin extends ParentHiddenUserMessageOrigin {}

export class HiddenUserMessageOrigin extends BaseMessageOrigin<MessageOriginType.HiddenUser> {
	static {
		this.mixin(ParentHiddenUserMessageOrigin);
	}
}
