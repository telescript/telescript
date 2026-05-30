import { ChatType } from '@telescript/api-types';
import { Chat } from './Chat.js';
import { Mixin, SupergroupChat as ParentSupergroupChat } from '@telescript/structures';

export interface SupergroupChat extends ParentSupergroupChat {}

export class SupergroupChat extends Chat<ChatType.Supergroup> {}

Mixin(SupergroupChat, ParentSupergroupChat);
