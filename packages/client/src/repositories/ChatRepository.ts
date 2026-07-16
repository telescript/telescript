import { APIChat, ChatType } from '@telescript/api-types';
import { Repository } from './Repository.js';
import { BaseChat, ChannelChat, Chat, GroupChat, PrivateChat, SupergroupChat } from '../structures/index.js';

export class ChatRepository extends Repository<APIChat, Chat> {
	public resolve(data: APIChat): Chat {
		switch (data.type) {
			case ChatType.Channel:
				return new ChannelChat(this.client, data);
			case ChatType.Group:
				return new GroupChat(this.client, data);
			case ChatType.Private:
				return new PrivateChat(this.client, data);
			case ChatType.Supergroup:
				return new SupergroupChat(this.client, data);
			default:
				return new BaseChat<never>(this.client, data);
		}
	}
}
