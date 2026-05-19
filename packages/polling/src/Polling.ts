import { APIMethod } from '@telescript/api-types';
import { Requester } from '@telescript/requester';
import { DefaultPollingOptions } from './constants';

export interface PollingOptions {
	timeout?: number;
}

export class Polling {
	public options: PollingOptions;

	public constructor(
		public requester: Requester,
		options?: PollingOptions,
	) {
		this.options = { ...DefaultPollingOptions, ...options };
	}

	public async *[Symbol.asyncIterator]() {
		let offset: number | undefined = undefined;

		while (true) {
			const updates = (await this.requester.request(APIMethod.GetUpdates, {
				offset,
				timeout: this.options.timeout,
			})) as APIMethod.GetUpdates.Result;

			for (const update of updates) {
				yield update;
			}

			const lastUpdate = updates.at(-1);
			if (lastUpdate) {
				offset = lastUpdate.update_id + 1;
			}
		}
	}
}
