import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class VenueMessage extends BaseMessage<MessageType.Venue> {
	public get venue(): Resolve<'Venue'> {
		return createStructure(this[Structure.OwnerProperty], 'Venue', this[Structure.DataProperty].venue);
	}

	public get type(): MessageType.Venue {
		return MessageType.Venue;
	}

	public isVenue(): this is Resolve<'VenueMessage'> {
		return true;
	}
}
