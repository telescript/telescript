import { ChatType } from '@telescript/api-types';
import { Chat } from './Chat.js';
import { Mixin, GroupChat as ParentGroupChat } from '@telescript/structures';

export interface GroupChat extends ParentGroupChat {}

export class GroupChat extends Chat<ChatType.Group> {}

Mixin(GroupChat, ParentGroupChat);
