import { APIBotSubscriptionUpdatedUpdate } from '@telescript/api-types';
import { Client, ClientEvent } from '../../Client.js';
import { BotSubscriptionUpdated } from '../../../structures/messages/BotSubscriptionUpdated.js';

export function subscription(client: Client, update: APIBotSubscriptionUpdatedUpdate) {
	const subscription = new BotSubscriptionUpdated(client, update.subscription);
	return [ClientEvent.Subscription, [subscription]] as const;
}
