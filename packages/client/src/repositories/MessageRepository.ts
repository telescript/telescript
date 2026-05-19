import { Message as APIMessage } from '@telescript/api-types';
import { Message } from '../structures/Message.js';
import { Repository } from './Repository.js';

export class MessageRepository extends Repository<APIMessage, Message> {
	public resolve(data: APIMessage): Message {
		return new Message(this.client, data);
	}
}
