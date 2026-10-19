import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { expect, it } from 'vitest';

// Vitest resolves imports its own way (e.g. without `.js` extensions), so load the built packages in plain Node, the
// way users do.
it('loads the built packages in plain Node', () => {
	const script = `
		const bot = await import('./dist/index.js');
		const client = bot.createClient({ token: '1:x' });
		const message = client.messages.resolve({ message_id: 1, date: 1, chat: { id: 5, type: 'private' }, text: 'hi' });
		console.log(JSON.stringify([message.constructor.name, message.type, typeof message.reply, message.chat.client === client]));
	`;
	const output = execFileSync(process.execPath, ['--input-type=module', '-e', script], {
		cwd: join(import.meta.dirname, '..'),
		encoding: 'utf8',
	});

	expect(JSON.parse(output)).toEqual(['TextMessage', 'text', 'function', true]);
});
