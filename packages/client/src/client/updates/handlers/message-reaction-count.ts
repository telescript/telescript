import { APIMessageReactionCountUpdate } from '@telescript/api-types';
import { createStructure } from '@telescript/structures';
import { Client, ClientEvent } from '../../Client.js';

export function message_reaction_count(client: Client, update: APIMessageReactionCountUpdate) {
	const reactionCount = createStructure(client, 'MessageReactionCountUpdated', update.message_reaction_count);
	return [ClientEvent.MessageReactionCount, [reactionCount]] as const;
}
