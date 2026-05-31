import { BaseChat } from './BaseChat.js';
import { ChannelChat } from './ChannelChat.js';
import { GroupChat } from './GroupChat.js';
import { PrivateChat } from './PrivateChat.js';
import { SupergroupChat } from './SupergroupChat.js';

export * from './BaseChat.js';
export * from './ChannelChat.js';
export * from './GroupChat.js';
export * from './PrivateChat.js';
export * from './SupergroupChat.js';

export type Chat = BaseChat | ChannelChat | GroupChat | PrivateChat | SupergroupChat;
