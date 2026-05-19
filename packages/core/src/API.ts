import { APIMethod } from '@telescript/api-types';
import type { Requester } from './Core.js';

export class API {
	public constructor(public requester: Requester) {}

	public async getUpdates(offset?: number, limit?: number) {
		return (await this.requester.request(APIMethod.GetUpdates, {
			offset,
			limit,
		})) as APIMethod.GetUpdates.Result;
	}

	public async getMe() {
		return (await this.requester.request(APIMethod.GetMe)) as APIMethod.GetMe.Result;
	}

	public async sendMessage(chatId: number | string, text: string) {
		return (await this.requester.request(APIMethod.SendMessage, {
			chat_id: chatId,
			text,
		})) as APIMethod.SendMessage.Result;
	}
}
