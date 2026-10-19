import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import type { Resolve } from '../registry.js';

export class ConnectedWebsiteMessage extends BaseMessage<MessageType.ConnectedWebsite> {
	public get connectedWebsite() {
		return this[Structure.DataProperty].connected_website;
	}

	public get type(): MessageType.ConnectedWebsite {
		return MessageType.ConnectedWebsite;
	}

	public isConnectedWebsite(): this is Resolve<'ConnectedWebsiteMessage'> {
		return true;
	}
}
