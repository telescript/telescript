import { Client } from '@telescript/client';
import { Polling, PollingOptions } from '@telescript/polling';
import { Requester, RequesterOptions } from '@telescript/requester';

export * from '@telescript/client';

export interface ClientCreateOptions {
	token: string;
	requester?: Partial<RequesterOptions>;
	polling?: Partial<PollingOptions>;
}

export function createClient(options: ClientCreateOptions) {
	const requester = new Requester(options.token, options.requester);
	const updateTransport = new Polling(requester, options.polling);
	return new Client({ requester, updateTransport });
}
