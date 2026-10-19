import { MessageType, type APIMessage } from '@telescript/api-types';
import { describe, expect, it } from 'vitest';
import * as S from '../dist/index.js';
import { loadMessageVariants, walk } from './fixtures.js';

// This file never loads the client, so every structure must be a structures class.
const SEEDS = [0, 1, 2, 3];
const variants = loadMessageVariants();
const registered = S.getRegisteredStructures() as Record<string, Function>;

describe.each(variants)('$name message', ({ name, build }) => {
	it.each(SEEDS)('resolves with the structures classes only (seed %i)', (seed) => {
		const message = S.createMessage(build(seed) as unknown as APIMessage);

		expect(message.constructor.name).toBe(`${name}Message`);
		expect((message as unknown as Record<string, () => boolean>)[`is${name}`]!()).toBe(true);
		expect(message.type).toBe(MessageType[name as keyof typeof MessageType]);

		const issues: string[] = [];
		const problems = walk(message, (structure, path) => {
			if (!(structure instanceof S.Structure)) issues.push(`${path}: not a structure`);
			else if (structure[S.Structure.OwnerProperty] !== S.defaultOwner)
				issues.push(`${path}: owner is not the default`);
			const Class = registered[structure.constructor.name];
			if (Class && Class !== structure.constructor) issues.push(`${path}: not the registered class`);
		});
		expect([...problems, ...issues]).toEqual([]);
	});
});

describe('structures', () => {
	const data = variants.find((variant) => variant.name === 'Photo')!.build(0) as unknown as APIMessage;

	it('give a message of an unknown kind no type', () => {
		const { photo, ...unknown } = data as unknown as Record<string, unknown>;
		void photo;
		const message = S.createMessage({ ...unknown, future_content: {} } as unknown as APIMessage);

		expect(message.constructor).toBe(S.getRegisteredStructures().BaseMessage);
		expect(message.type).toBeNull();
	});

	it('serialize to their API data', () => {
		const message = S.createMessage(data);

		expect(message.toJSON()).toBe(data);
		expect(JSON.parse(JSON.stringify(message))).toEqual(data);
		expect(JSON.parse(JSON.stringify({ chat: message.chat }))).toEqual({ chat: data.chat });
	});

	it('return the same nested structure for the same data and owner', () => {
		const message = S.createMessage(data);

		expect(message.chat).toBe(message.chat);
		expect(message.from).toBe(message.from);
		expect(message.replyToMessage).toBe(message.replyToMessage);
		expect(S.createMessage(data)).toBe(message);
	});

	it('keep structures of different owners apart', () => {
		const owner: S.StructureOwner = {};
		const message = S.createMessage(data);
		const owned = S.createMessage(data, owner);

		expect(owned).not.toBe(message);
		expect(owned.chat).not.toBe(message.chat);
		expect(owned.chat[S.Structure.OwnerProperty]).toBe(owner);
	});
});
