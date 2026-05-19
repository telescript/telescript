# TeleScript

## About

> [!WARNING]  
> **Under Development:** This library is in an experimental state. There is not 100% coverage of the Telegram Bot API yet. Expect breaking changes.

TeleScript is a modular ecosystem that lets you easily interact with the [Telegram Bot API](core.telegram.org/bots/api).

## Installation

```sh
npm install @telescript/client
yarn add @telescript/client
pnpm add @telescript/client
bun add @telescript/client
```

## Example usage

```ts
import { Client } from '@telescript/client';

const client = new Client({ token: TOKEN });

client.on('message', (message) => {
	if (message.text === '/start') {
		message.chat.sendText('Hello, world!');
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
