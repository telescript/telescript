import { ChatType } from '@telescript/api-types';
import { Chat } from './Chat.js';
import { Mixin, ChannelChat as ParentChannelChat } from '@telescript/structures';

export interface ChannelChat extends ParentChannelChat {}

export class ChannelChat extends Chat<ChatType.Channel> {}

Mixin(ChannelChat, ParentChannelChat);
