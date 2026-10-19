import { createStructure, type Resolve } from '../registry.js';
import { TransactionPartnerType } from '@telescript/api-types';
import { BaseTransactionPartner } from './BaseTransactionPartner.js';
import { Structure } from '../Structure.js';
import { createChat } from '../chats/index.js';

export class ChatTransactionPartner extends BaseTransactionPartner<TransactionPartnerType.Chat> {
	public get chat() {
		return createChat(this[Structure.DataProperty].chat, this[Structure.OwnerProperty]);
	}

	public get gift(): Resolve<'Gift'> | null {
		const data = this[Structure.DataProperty].gift;
		return data ? createStructure(this[Structure.OwnerProperty], 'Gift', data) : null;
	}

	public isChat(): this is Resolve<'ChatTransactionPartner'> {
		return true;
	}
}
