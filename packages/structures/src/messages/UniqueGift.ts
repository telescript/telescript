import { APIUniqueGift } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';
import { UniqueGiftModel } from './UniqueGiftModel.js';
import { UniqueGiftSymbol } from './UniqueGiftSymbol.js';
import { UniqueGiftBackdrop } from './UniqueGiftBackdrop.js';
import { UniqueGiftColors } from './UniqueGiftColors.js';

export class UniqueGift extends Structure<APIUniqueGift> {
	public get giftId() {
		return this[Structure.DataProperty].gift_id;
	}

	public get baseName() {
		return this[Structure.DataProperty].base_name;
	}

	public get name() {
		return this[Structure.DataProperty].name;
	}

	public get number() {
		return this[Structure.DataProperty].number;
	}

	public get model() {
		return new UniqueGiftModel(this[Structure.DataProperty].model);
	}

	public get symbol() {
		return new UniqueGiftSymbol(this[Structure.DataProperty].symbol);
	}

	public get backdrop() {
		return new UniqueGiftBackdrop(this[Structure.DataProperty].backdrop);
	}

	public get isPremium() {
		return this[Structure.DataProperty].is_premium ?? false;
	}

	public get isBurned() {
		return this[Structure.DataProperty].is_burned ?? false;
	}

	public get isFromBlockchain() {
		return this[Structure.DataProperty].is_from_blockchain ?? false;
	}

	public get colors() {
		const data = this[Structure.DataProperty].colors;
		return data ? new UniqueGiftColors(data) : null;
	}

	public get publisherChat() {
		const data = this[Structure.DataProperty].publisher_chat;
		return data ? createChat(data) : null;
	}
}
