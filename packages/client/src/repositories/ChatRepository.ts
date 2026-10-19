import { APIChat } from '@telescript/api-types';
import { createChat, type Chat } from '@telescript/structures';
import { Repository } from './Repository.js';

export class ChatRepository extends Repository<APIChat, Chat> {
	public resolve(data: APIChat): Chat {
		return createChat(data, this.client);
	}
}
