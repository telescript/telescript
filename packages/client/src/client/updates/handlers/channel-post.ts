import { APIChannelPostUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';

export function channel_post(client: Client, update: APIChannelPostUpdate) {
	const message = client.messages.resolve(update.channel_post);
	return [ClientEvent.ChannelPost, [message]] as const;
}
