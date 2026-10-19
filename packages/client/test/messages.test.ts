import type { APIMessage, APIUpdate } from '@telescript/api-types';
import * as S from '@telescript/structures';
import { describe, expect, it } from 'vitest';
import { Client, ClientEvent } from '../dist/index.js';
import { clientClasses } from '../dist/structures/registry.js';
import { loadMessageVariants, walk } from '../../structures/test/fixtures.js';

const SEEDS = [0, 1, 2, 3];
const variants = loadMessageVariants();
const clientClassByName = new Map<string, Function>(Object.entries(clientClasses));
const messageClassNames = [...clientClassByName.keys()].filter((name) => name.endsWith('Message'));

function createClient(sent: unknown[] = [], updates: APIUpdate[] = []) {
	const requester = {
		async request(method: string, params?: Record<string, unknown>) {
			sent.push([method, params]);
			return { message_id: 100, date: 1, chat: { id: params?.chat_id, type: 'private' }, text: params?.text };
		},
	};
	const updateTransport = (async function* () {
		yield* updates;
	})();
	return new Client({ requester, updateTransport } as never);
}

describe.each(variants)('$name message', ({ name, build }) => {
	const className = `${name}Message`;

	it.each(SEEDS)('resolves to the client class, every nested structure belongs to the client (seed %i)', (seed) => {
		const client = createClient();
		const message = client.messages.resolve(build(seed) as unknown as APIMessage);

		expect(message.constructor).toBe(clientClassByName.get(className));
		expect((message as unknown as Record<string, () => boolean>)[`is${name}`]!()).toBe(true);

		const issues: string[] = [];
		const problems = walk(message, (structure, path) => {
			const owned = structure as unknown as S.Structure<unknown> & { client?: unknown };
			if (owned[S.Structure.OwnerProperty] !== client) issues.push(`${path}: owner is not the client`);
			const clientClass = clientClassByName.get(structure.constructor.name);
			if (clientClass && structure.constructor !== clientClass) issues.push(`${path}: not the client class`);
			if (clientClass && owned.client !== client) issues.push(`${path}: .client is not the client`);
		});
		expect([...problems, ...issues]).toEqual([]);
	});
});

describe('client message classes', () => {
	it('cover every structures message class', () => {
		const structuresMessages = Object.entries(S.getRegisteredStructures())
			.filter(([, Class]) => Class === S.BaseMessage || Class?.prototype instanceof S.BaseMessage)
			.map(([name]) => name);

		expect(messageClassNames.filter((name) => name !== 'InaccessibleMessage').sort()).toEqual(
			structuresMessages.sort(),
		);
	});

	it.each(messageClassNames)('%s extends its structures class under the same name', (name) => {
		const Class = clientClassByName.get(name)!;

		expect(Class.name).toBe(name);
		expect(Class.prototype).toBeInstanceOf((S as unknown as Record<string, Function>)[name]!);
		expect(Object.getOwnPropertyDescriptor(Class.prototype, 'client')?.get).toBeTypeOf('function');
		if (name !== 'InaccessibleMessage') expect(Class.prototype.reply).toBeTypeOf('function');
	});

	it('are what the structures factories create once the client is loaded', () => {
		const message = S.createMessage(variants[0]!.build(0) as unknown as APIMessage);

		expect(message.constructor).toBe(clientClassByName.get(message.constructor.name));
		expect(() => message.client).toThrow('This structure was not created by a client');
	});

	it('include inaccessible messages', () => {
		const client = createClient();
		const message = client.messages.resolveMaybeInaccessible({
			message_id: 1,
			date: 0,
			chat: { id: 1, type: 'private' },
		} as never);

		expect(message.isInaccessible()).toBe(true);
		expect(message.constructor).toBe(clientClasses.InaccessibleMessage);
		expect(message.client).toBe(client);
		expect(message.chat.client).toBe(client);
	});
});

describe('client', () => {
	const photo = variants.find((variant) => variant.name === 'Photo')!;

	it('keeps each client as the owner of its own structures', () => {
		const [a, b] = [createClient(), createClient()];
		const data = photo.build(0) as unknown as APIMessage;
		const [messageA, messageB] = [a.messages.resolve(data), b.messages.resolve(data)];

		expect(messageA.chat.client).toBe(a);
		expect(messageB.chat.client).toBe(b);
		expect(messageA.replyToMessage?.client).toBe(a);
	});

	it('replies in the same chat, topic and business connection', async () => {
		const sent: unknown[] = [];
		const client = createClient(sent);
		const data = { ...photo.build(0), is_topic_message: true, message_thread_id: 7, business_connection_id: 'bc' };
		const message = client.messages.resolve(data as unknown as APIMessage);

		const reply = await message.reply({ text: 'hi' });

		expect(sent).toEqual([
			[
				'sendMessage',
				{
					business_connection_id: 'bc',
					message_thread_id: 7,
					reply_parameters: { message_id: data.message_id },
					chat_id: message.chat.id,
					text: 'hi',
				},
			],
		]);
		expect(reply.client).toBe(client);
	});

	it('forwards, copies and deletes a message', async () => {
		const sent: unknown[] = [];
		const client = createClient(sent);
		const message = client.messages.resolve(photo.build(0) as unknown as APIMessage);
		const ids = { from_chat_id: message.chat.id, message_id: message.id };

		const forwarded = await message.forward({ chatId: 9, messageThreadId: 2 });
		await message.copy({ chatId: 9 });
		await message.delete();

		expect(sent).toEqual([
			['forwardMessage', { chat_id: 9, message_thread_id: 2, ...ids }],
			['copyMessage', { chat_id: 9, ...ids }],
			['deleteMessage', { chat_id: message.chat.id, message_id: message.id }],
		]);
		expect(forwarded.client).toBe(client);
	});

	it('edits the text of a text message', async () => {
		const sent: unknown[] = [];
		const client = createClient(sent);
		const message = client.messages.resolve({ message_id: 3, date: 1, chat: { id: 4, type: 'private' }, text: 'a' });
		if (!message.isText()) throw new Error('expected a text message');

		const edited = await message.editText({ text: 'b' });

		expect(sent).toEqual([['editMessageText', { chat_id: 4, message_id: 3, text: 'b' }]]);
		expect(edited.client).toBe(client);
	});

	it.each(['private', 'group', 'supergroup', 'channel'])('sends from a %s chat', async (type) => {
		const sent: unknown[] = [];
		const client = createClient(sent);
		const chat = client.chats.resolve({ id: 42, type } as never);

		const message = await chat.sendText({ text: 'hi', messageThreadId: 3 });

		expect(sent).toEqual([['sendMessage', { chat_id: 42, message_thread_id: 3, text: 'hi' }]]);
		expect(message.client).toBe(client);
		expect(message.chat.client).toBe(client);
	});

	it('refuses .client on a client class created without a client', () => {
		const chat = new clientClasses.PrivateChat({ id: 1, type: 'private' } as never);
		expect(() => chat.client).toThrow('This structure was not created by a client');
	});

	it('emits message reactions, reaction counts and deleted business messages', async () => {
		const chat = { id: 1, type: 'private', first_name: 'a' };
		const client = createClient([], [
			{
				update_id: 1,
				message_reaction: {
					chat,
					message_id: 5,
					date: 1,
					old_reaction: [],
					new_reaction: [{ type: 'emoji', emoji: '👍' }],
				},
			},
			{
				update_id: 2,
				message_reaction_count: {
					chat,
					message_id: 5,
					date: 1,
					reactions: [{ type: { type: 'emoji', emoji: '👍' }, total_count: 2 }],
				},
			},
			{ update_id: 3, deleted_business_messages: { business_connection_id: 'bc', chat, message_ids: [5, 6] } },
		] as never);
		const events: [string, unknown][] = [];
		for (const event of [
			ClientEvent.MessageReaction,
			ClientEvent.MessageReactionCount,
			ClientEvent.DeletedBusinessMessages,
		] as const) {
			client.on(event, (structure) => events.push([event, structure]));
		}

		await client.start();

		expect(events.map(([event]) => event)).toEqual([
			ClientEvent.MessageReaction,
			ClientEvent.MessageReactionCount,
			ClientEvent.DeletedBusinessMessages,
		]);
		const [reaction, count, deleted] = events.map(([, structure]) => structure) as [
			S.MessageReactionUpdated,
			S.MessageReactionCountUpdated,
			S.BusinessMessagesDeleted,
		];
		expect(reaction.messageId).toBe(5);
		expect(reaction.newReaction[0]?.isEmoji()).toBe(true);
		expect(reaction.chat.client).toBe(client);
		expect(count.reactions[0]?.totalCount).toBe(2);
		expect(deleted.messageIds).toEqual([5, 6]);
		expect(deleted.chat.client).toBe(client);
	});
});
