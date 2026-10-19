// Compiled by types.test.ts against the built declarations, as a consumer of the client sees them.
import type * as S from '@telescript/structures';
import type * as C from '../../dist/index.js';
import type { clientClasses } from '../../dist/structures/registry.js';
import { MessageType } from '../../dist/index.js';

type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
declare function assert<_T extends true>(): void;

// Every client class is registered both at runtime and in the types.
assert<Equals<keyof S.TypeOverrides, keyof typeof clientClasses>>();

declare const message: C.Message;

// Nested structures are client classes with their actions.
message.reply({ text: 'text' });
message.chat.sendText({ text: 'text' });
message.replyToMessage?.reply({ text: 'text' });
assert<Equals<ReturnType<C.Client['messages']['resolve']>, C.Message>>();

// Class guards and mixin guards keep the actions.
if (message.isPhoto()) {
	message.photo;
	message.caption;
	message.mediaGroupId;
	message.reply({ text: 'text' });
	const photo: C.PhotoMessage = message;
	// A client message is accepted where a structures message is expected.
	const structuresPhoto: S.PhotoMessage = photo;
	void structuresPhoto;
}

// `type` narrows like the class guards, and is `null` only for a kind this version doesn't know.
if (message.type === MessageType.Photo) {
	message.photo;
	message.reply({ text: 'text' });
	assert<Equals<typeof message, C.PhotoMessage>>();
}
assert<Equals<typeof message.type, MessageType | null>>();
if (message.type === null) {
	assert<Equals<typeof message, C.BaseMessage<never>>>();
}

// Every message can be forwarded, copied and deleted; only text messages can be edited.
message.forward({ chatId: 1 });
message.copy({ chatId: 1 });
message.delete();
if (message.isText()) {
	message.editText({ text: 'text' });
}
if (message.isPhoto()) {
	// @ts-expect-error only text messages have editText
	message.editText({ text: 'text' });
}

if (message.isCaptioned()) {
	message.caption;
	message.reply({ text: 'text' });
}

if (message.chat.isSupergroup()) {
	message.chat.isForum;
	message.chat.sendText({ text: 'text' });
}

// The exported client classes are the types the client creates, and `instanceof` narrows to them.
assert<Equals<C.TextMessage, S.Resolve<'TextMessage'>>>();
assert<Equals<C.BaseMessage<never>, S.Resolve<'BaseMessage'>>>();
declare const anyMessage: unknown;
declare const TextMessageClass: typeof C.TextMessage;
if (anyMessage instanceof TextMessageClass) {
	anyMessage.text;
	anyMessage.reply({ text: 'text' });
	anyMessage.client;
}

// The structures factories are typed with the client classes once the client is loaded (and create them).
declare const data: S.MaybeInaccessibleMessage;
if (data.isInaccessible()) {
	data.client;
	// @ts-expect-error inaccessible messages have no actions
	data.reply({ text: 'text' });
}

// Message update structures carry client chats.
declare const reaction: C.MessageReactionUpdated;
reaction.chat.sendText({ text: 'text' });

// Classes without actions stay the structures classes.
assert<Equals<NonNullable<typeof message.from>, S.User>>();
// @ts-expect-error users have no actions
message.from?.sendText({ text: 'text' });
