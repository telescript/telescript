import { registerStructures } from '../registry.js';
import { User } from './User.js';
export * from './BaseUser.js';
export * from './BotAccessSettings.js';
export * from './BotDescription.js';
export * from './BotName.js';
export * from './BotShortDescription.js';
export * from './ClientUser.js';
export * from './User.js';

declare module '../registry.js' {
	interface DefaultTypes {
		User: User;
	}
}

registerStructures({ User });
