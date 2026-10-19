import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class PassportMessage extends BaseMessage<MessageType.Passport> {
	public get passportData(): Resolve<'PassportData'> {
		return createStructure(this[Structure.OwnerProperty], 'PassportData', this[Structure.DataProperty].passport_data);
	}

	public get type(): MessageType.Passport {
		return MessageType.Passport;
	}

	public isPassport(): this is Resolve<'PassportMessage'> {
		return true;
	}
}
