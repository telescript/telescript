import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class DiceMessage extends BaseMessage<MessageType.Dice> {
	public get dice(): Resolve<'Dice'> {
		return createStructure(this[Structure.OwnerProperty], 'Dice', this[Structure.DataProperty].dice);
	}

	public get type(): MessageType.Dice {
		return MessageType.Dice;
	}

	public isDice(): this is Resolve<'DiceMessage'> {
		return true;
	}
}
