import { APIGift } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { Sticker } from '../media/sticker/Sticker.js';
import { createChat } from '../chats/index.js';
import { GiftBackground } from './GiftBackground.js';

export class Gift extends Structure<APIGift> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get sticker() {
		return new Sticker(this[Structure.DataProperty].sticker);
	}

	public get starCount() {
		return this[Structure.DataProperty].star_count;
	}

	public get upgradeStarCount() {
		return this[Structure.DataProperty].upgrade_star_count ?? null;
	}

	public get isPremium() {
		return this[Structure.DataProperty].is_premium ?? false;
	}

	public get hasColors() {
		return this[Structure.DataProperty].has_colors ?? false;
	}

	public get totalCount() {
		return this[Structure.DataProperty].total_count ?? null;
	}

	public get remainingCount() {
		return this[Structure.DataProperty].remaining_count ?? null;
	}

	public get personalTotalCount() {
		return this[Structure.DataProperty].personal_total_count ?? null;
	}

	public get personalRemainingCount() {
		return this[Structure.DataProperty].personal_remaining_count ?? null;
	}

	public get background() {
		const data = this[Structure.DataProperty].background;
		return data ? new GiftBackground(data) : null;
	}

	public get uniqueGiftVariantCount() {
		return this[Structure.DataProperty].unique_gift_variant_count ?? null;
	}

	public get publisherChat() {
		const data = this[Structure.DataProperty].publisher_chat;
		return data ? createChat(data) : null;
	}
}
