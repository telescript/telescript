import { APIMessage } from '@telescript/api-types';
import { Message } from '../structures/messages/index.js';
import { Repository } from './Repository.js';

export class MessageRepository extends Repository<APIMessage, Message> {
	public resolve(data: APIMessage) {
		return new Message(this.client, data);
	}
}
