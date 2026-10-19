import { registerStructures } from '../registry.js';
import { CallbackGame } from './CallbackGame.js';
import { Game } from './Game.js';
export * from './CallbackGame.js';
export * from './Game.js';
export * from './GameHighScore.js';

declare module '../registry.js' {
	interface DefaultTypes {
		CallbackGame: CallbackGame;
		Game: Game;
	}
}

registerStructures({ CallbackGame, Game });
