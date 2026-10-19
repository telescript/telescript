import { registerStructures, type ClassTable } from '@telescript/structures';
import { BaseChat } from './chats/BaseChat.js';
import { ChannelChat } from './chats/ChannelChat.js';
import { GroupChat } from './chats/GroupChat.js';
import { PrivateChat } from './chats/PrivateChat.js';
import { SupergroupChat } from './chats/SupergroupChat.js';
import * as messageClasses from './messages/classes.js';

/**
 * The client classes that replace structures classes. Loading the client registers them, so every structure is
 * created with them (`.client` throws for those not created by a client), matching the `TypeOverrides` below.
 *
 * @internal
 */
export const clientClasses = {
	BaseChat,
	ChannelChat,
	GroupChat,
	PrivateChat,
	SupergroupChat,
	...messageClasses,
} satisfies ClassTable;

registerStructures(clientClasses);

type MessageOverrides = { [Name in keyof typeof messageClasses]: InstanceType<(typeof messageClasses)[Name]> };

declare module '@telescript/structures' {
	interface TypeOverrides extends MessageOverrides {
		BaseChat: BaseChat<never>;
		ChannelChat: ChannelChat;
		GroupChat: GroupChat;
		PrivateChat: PrivateChat;
		SupergroupChat: SupergroupChat;
	}
}
