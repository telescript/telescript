import { APIMethod } from '@telescript/api-types';
import type { Requester } from '@telescript/spec';

export class API {
	public constructor(public requester: Requester) {}

	public async getUpdates(params: APIMethod.GetUpdates.Params) {
		return (await this.requester.request(APIMethod.GetUpdates, params)) as APIMethod.GetUpdates.Result;
	}

	public async getMe() {
		return (await this.requester.request(APIMethod.GetMe)) as APIMethod.GetMe.Result;
	}

	public async logOut() {
		return (await this.requester.request(APIMethod.LogOut)) as APIMethod.LogOut.Result;
	}

	public async close() {
		return (await this.requester.request(APIMethod.Close)) as APIMethod.Close.Result;
	}

	public async sendMessage(params: APIMethod.SendMessage.Params) {
		return (await this.requester.request(APIMethod.SendMessage, params)) as APIMethod.SendMessage.Result;
	}
}
