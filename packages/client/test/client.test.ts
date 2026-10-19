import type { APIUpdate } from '@telescript/api-types';
import type { UpdateTransport } from '@telescript/spec';
import { describe, expect, it } from 'vitest';
import { Client, ClientEvent } from '../dist/index.js';

const message = (id: number) => ({
	update_id: id,
	message: { message_id: id, date: 1, chat: { id: 1, type: 'private' }, text: String(id) },
});

/** Yields `updates`, then waits until stopped, like polling with no new updates. */
function transport(updates: APIUpdate[]): UpdateTransport {
	let stop = () => {};
	const stopped = new Promise<void>((resolve) => (stop = resolve));
	return {
		async *[Symbol.asyncIterator]() {
			yield* updates;
			await stopped;
		},
		stop,
	};
}

function createClient(updates: APIUpdate[]) {
	const requester = { request: async () => ({}) };
	return new Client({ requester, updateTransport: transport(updates) });
}

describe('Client', () => {
	it('keeps going when a listener throws, and emits the error', async () => {
		const client = createClient([message(1), message(2)] as APIUpdate[]);
		const received: string[] = [];
		const errors: unknown[] = [];
		client.on(ClientEvent.Error, (error) => errors.push(error));
		client.on(ClientEvent.Message, (msg) => {
			if (msg.id === 1) throw new Error('listener failed');
			received.push(String(msg.id));
			client.stop();
		});

		await client.start();

		expect(received).toEqual(['2']);
		expect(errors).toMatchObject([{ message: 'listener failed' }]);
	});

	it('emits the rejection of an async listener as an error', async () => {
		const client = createClient([message(1)] as APIUpdate[]);
		const error = new Promise((resolve) => client.on(ClientEvent.Error, resolve));
		client.on(ClientEvent.Message, async () => {
			throw new Error('async listener failed');
		});

		const started = client.start();
		expect(await error).toMatchObject({ message: 'async listener failed' });
		client.stop();
		await started;
	});

	it('resolves start() once stopped', async () => {
		const client = createClient([]);
		const started = client.start();

		client.stop();

		await expect(started).resolves.toBeUndefined();
	});
});
