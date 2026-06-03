import { APIEditedChannelPostUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';

export function edited_channel_post(client: Client, update: APIEditedChannelPostUpdate) {
	const message = client.messages.resolve(update.edited_channel_post);
	return [ClientEvent.EditedChannelPost, [message]] as const;
}
