import { Client } from './Client.js';
import { Message } from './structures/Message.js';

export * from './Client.js';

const client = new Client({ token: '1806800298:AAHk4Oq3YLuIELRafnt2anmUYNNqZ_I6y3o' });

client.on('message', (message: Message) => {
	message.chat.sendText('Hello, world!');
});

client.start();
