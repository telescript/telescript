import { GiveawayWinners as ParentGiveawayWinners, Structure } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIGiveawayWinners } from '@telescript/api-types';

export interface GiveawayWinners extends ParentGiveawayWinners {}

export class GiveawayWinners extends ParentGiveawayWinners {
	public constructor(
		public client: Client,
		data: APIGiveawayWinners,
	) {
		super(data);
	}

	public get chat() {
		return this.client.chats.resolve(this[Structure.DataProperty].chat);
	}

	public get winners() {
		return this[Structure.DataProperty].winners.map((data) => this.client.users.resolve(data));
	}
}
