import { APIBotSubscriptionUpdatedUpdate } from '@telescript/api-types';
import { createStructure } from '@telescript/structures';
import { Client, ClientEvent } from '../../Client.js';

export function subscription(client: Client, update: APIBotSubscriptionUpdatedUpdate) {
	const subscription = createStructure(client, 'BotSubscriptionUpdated', update.subscription);
	return [ClientEvent.Subscription, [subscription]] as const;
}
