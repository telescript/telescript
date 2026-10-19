import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GiftUpgradeSentMessage extends BaseMessage<MessageType.GiftUpgradeSent> {
	public get giftUpgradeSent(): Resolve<'GiftInfo'> {
		return createStructure(this[Structure.OwnerProperty], 'GiftInfo', this[Structure.DataProperty].gift_upgrade_sent);
	}

	public get type(): MessageType.GiftUpgradeSent {
		return MessageType.GiftUpgradeSent;
	}

	public isGiftUpgradeSent(): this is Resolve<'GiftUpgradeSentMessage'> {
		return true;
	}
}
