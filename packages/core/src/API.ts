import { Method } from '@telescript/api-types';
import type { Requester } from './Core.js';

export class API {
	public constructor(public requester: Requester) {}

	public async getUpdates(offset?: number, limit?: number) {
		return (await this.requester.request(Method.GetUpdates, {
			offset,
			limit,
		})) as Method.GetUpdates.Result;
	}

	public async getMe() {
		return (await this.requester.request(Method.GetMe)) as Method.GetMe.Result;
	}

	public async sendMessage(chatId: number | string, text: string) {
		return (await this.requester.request(Method.SendMessage, {
			chat_id: chatId,
			text,
		})) as Method.SendMessage.Result;
	}
}
