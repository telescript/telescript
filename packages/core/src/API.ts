import { Method } from '@telescript/api-types';
import type { Requester } from './Core.js';

export class API {
	public constructor(public requester: Requester) {}

	public async getMe() {
		return (await this.requester.request(Method.GetMe)) as Method.GetMe.Result;
	}
}
