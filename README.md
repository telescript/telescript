# TeleScript

## About

> [!WARNING]
> **Under Development:** This library is in an experimental state. There is not 100% coverage of the Telegram Bot API yet. Expect breaking changes.

TeleScript is a modular ecosystem that lets you easily interact with the [Telegram Bot API](https://core.telegram.org/bots/api).

TeleScript is based on [discord.js](https://github.com/discordjs/discord.js): its split into small packages, its structures and its client API follow the design of discord.js, adapted to Telegram.

## Installation

```sh
npm install @telescript/bot
yarn add @telescript/bot
pnpm add @telescript/bot
bun add @telescript/bot
```

TeleScript is published as ES modules and needs Node.js.

## Example usage

```ts
import { ClientEvent, createClient, MessageType } from '@telescript/bot';

const client = createClient({ token: TOKEN });

client.on(ClientEvent.Message, async (message) => {
	if (message.isText() && message.text === '/start') {
		await message.reply({ text: 'Hello, world!' });
	}

	switch (message.type) {
		case MessageType.Photo:
			await message.chat.sendText({ text: `Nice photo, ${message.photo.length} sizes` });
			break;
		case MessageType.Sticker:
			await message.reply({ text: `${message.sticker.emoji ?? 'A sticker'}!` });
			break;
	}
});

client.start();
```

Every message is an instance of a class for its kind (`TextMessage`, `PhotoMessage`, ...). Narrow it with a guard (`message.isPhoto()`, `message.isCaptioned()`) or with `message.type`; both give you the fields of that kind. Optional fields are `null` when Telegram leaves them out.

## Packages

| Package                                         | Description                                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`@telescript/bot`](packages/bot)               | Everything to run a bot: the client with an HTTP requester and long polling         |
| [`@telescript/client`](packages/client)         | Update events, repositories and structures with API actions (`reply`, `sendText`)   |
| [`@telescript/structures`](packages/structures) | Classes for Bot API objects with getters and type guards, usable without the client |
| [`@telescript/core`](packages/core)             | Typed methods of the Bot API on top of a requester                                  |
| [`@telescript/requester`](packages/requester)   | HTTP requester with file uploads and rate limit retries                             |
| [`@telescript/polling`](packages/polling)       | Long polling update transport                                                       |
| [`@telescript/api-types`](packages/api-types)   | TypeScript types for the Bot API                                                    |
| [`@telescript/spec`](packages/spec)             | Interfaces shared by the packages: requester and update transport                   |

## Development

```sh
pnpm install
pnpm build        # build every package
pnpm test         # run the tests (after a build)
pnpm lint         # lint with ESLint (pnpm lint:fix to fix what it can)
pnpm format       # format with Prettier
pnpm check        # build, lint, check the formatting and test, as CI does
pnpm check:docs   # compare api-types with the Bot API docs
```

Requires Node.js 22 or later and pnpm. In VS Code, install the recommended extensions: files are then formatted and lint fixes applied on save.

## License

[Apache-2.0](LICENSE)
