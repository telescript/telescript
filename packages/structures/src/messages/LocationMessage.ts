import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class LocationMessage extends BaseMessage<MessageType.Location> {
	public get location(): Resolve<'Location'> {
		return createStructure(this[Structure.OwnerProperty], 'Location', this[Structure.DataProperty].location);
	}

	public get type(): MessageType.Location {
		return MessageType.Location;
	}

	public isLocation(): this is Resolve<'LocationMessage'> {
		return true;
	}
}
