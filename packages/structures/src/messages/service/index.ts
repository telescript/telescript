import { registerStructures } from '../../registry.js';
import { ChatBackground } from './ChatBackground.js';
import { ChatBoostAdded } from './ChatBoostAdded.js';
import { ChatOwnerChanged } from './ChatOwnerChanged.js';
import { ChatOwnerLeft } from './ChatOwnerLeft.js';
import { ChatShared } from './ChatShared.js';
import { CommunityChatAdded } from './CommunityChatAdded.js';
import { CommunityChatJoined } from './CommunityChatJoined.js';
import { CommunityChatRemoved } from './CommunityChatRemoved.js';
import { DirectMessagePriceChanged } from './DirectMessagePriceChanged.js';
import { ManagedBotCreated } from './ManagedBotCreated.js';
import { MessageAutoDeleteTimerChanged } from './MessageAutoDeleteTimerChanged.js';
import { ProximityAlertTriggered } from './ProximityAlertTriggered.js';
import { SharedUser } from './SharedUser.js';
import { UsersShared } from './UsersShared.js';
import { WebAppData } from './WebAppData.js';
import { WriteAccessAllowed } from './WriteAccessAllowed.js';
export * from './ChatBackground.js';
export * from './ChatBoostAdded.js';
export * from './ChatOwnerChanged.js';
export * from './ChatOwnerLeft.js';
export * from './ChatShared.js';
export * from './CommunityChatAdded.js';
export * from './CommunityChatJoined.js';
export * from './CommunityChatRemoved.js';
export * from './DirectMessagePriceChanged.js';
export * from './ManagedBotCreated.js';
export * from './MessageAutoDeleteTimerChanged.js';
export * from './ProximityAlertTriggered.js';
export * from './SharedUser.js';
export * from './UsersShared.js';
export * from './WriteAccessAllowed.js';
export * from './WebAppData.js';
export * from './backgrounds/index.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		ChatBackground: ChatBackground;
		ChatBoostAdded: ChatBoostAdded;
		ChatOwnerChanged: ChatOwnerChanged;
		ChatOwnerLeft: ChatOwnerLeft;
		ChatShared: ChatShared;
		CommunityChatAdded: CommunityChatAdded;
		CommunityChatJoined: CommunityChatJoined;
		CommunityChatRemoved: CommunityChatRemoved;
		DirectMessagePriceChanged: DirectMessagePriceChanged;
		ManagedBotCreated: ManagedBotCreated;
		MessageAutoDeleteTimerChanged: MessageAutoDeleteTimerChanged;
		ProximityAlertTriggered: ProximityAlertTriggered;
		SharedUser: SharedUser;
		UsersShared: UsersShared;
		WebAppData: WebAppData;
		WriteAccessAllowed: WriteAccessAllowed;
	}
}

registerStructures({
	ChatBackground,
	ChatBoostAdded,
	ChatOwnerChanged,
	ChatOwnerLeft,
	ChatShared,
	CommunityChatAdded,
	CommunityChatJoined,
	CommunityChatRemoved,
	DirectMessagePriceChanged,
	ManagedBotCreated,
	MessageAutoDeleteTimerChanged,
	ProximityAlertTriggered,
	SharedUser,
	UsersShared,
	WebAppData,
	WriteAccessAllowed,
});
