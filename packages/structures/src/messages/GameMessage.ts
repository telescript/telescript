import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class GameMessage extends BaseMessage<MessageType.Game> {
	public get game(): Resolve<'Game'> {
		return createStructure(this[Structure.OwnerProperty], 'Game', this[Structure.DataProperty].game);
	}

	public get type(): MessageType.Game {
		return MessageType.Game;
	}

	public isGame(): this is Resolve<'GameMessage'> {
		return true;
	}
}
