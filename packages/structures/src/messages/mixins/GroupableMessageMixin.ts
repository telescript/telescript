import { APIMessage, MessageType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import type { BaseMessage } from '../BaseMessage.js';

export interface GroupableMessageMixin<
	Type extends MessageType.Groupable = MessageType.Groupable,
	Data extends APIMessage.Base & APIMessage.GroupableBase = APIMessage.FromType<Type>,
> extends BaseMessage<Type, Data> {}

export class GroupableMessageMixin {
	public get mediaGroupId() {
		return this[Structure.DataProperty].media_group_id ?? null;
	}

	public isGroupable(): this is GroupableMessageMixin {
		return true;
	}
}
