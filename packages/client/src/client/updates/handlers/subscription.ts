import { APIBotSubscriptionUpdatedUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';
import { BotSubscriptionUpdated } from '@telescript/structures';

export function subscription(client: Client, update: APIBotSubscriptionUpdatedUpdate) {
	const subscription = new BotSubscriptionUpdated(update.subscription, client);
	return [ClientEvent.Subscription, [subscription]] as const;
}
