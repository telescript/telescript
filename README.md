# TeleScript

## About

> [!WARNING]  
> **Under Development:** This library is in an experimental state. There is not 100% coverage of the Telegram Bot API yet. Expect breaking changes.

TeleScript is a modular ecosystem that lets you easily interact with the [Telegram Bot API](core.telegram.org/bots/api).

## Installation

```sh
npm install @telescript/bot
yarn add @telescript/bot
pnpm add @telescript/bot
bun add @telescript/bot
```

## Example usage

```ts
import { createClient } from '@telescript/bot';

const client = createClient({ token: TOKEN });

client.on('message', async (message) => {
	if (message.text === '/start') {
		await message.chat.sendText('Hello, world!');
	}
});

client.start();
```

## Development

```sh
pnpm install
pnpm build
pnpm format
pnpm check
```
