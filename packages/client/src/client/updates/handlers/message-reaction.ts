import { APIMessageReactionUpdate } from '@telescript/api-types';
import { createStructure } from '@telescript/structures';
import { Client, ClientEvent } from '../../Client.js';

export function message_reaction(client: Client, update: APIMessageReactionUpdate) {
	const reaction = createStructure(client, 'MessageReactionUpdated', update.message_reaction);
	return [ClientEvent.MessageReaction, [reaction]] as const;
}
