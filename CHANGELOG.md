# Changelog

All packages are versioned together in this file. TeleScript is pre-1.0: any release may break the API.

## Unreleased

Changes since `@telescript/bot` 0.0.25 (`client` 0.0.25, `structures` 0.0.5, `api-types` 0.0.9, `core` 0.0.9,
`requester` 0.0.10, `polling` 0.0.10, `spec` 0.0.5).

### Breaking

- Node.js 22 or later is required (`engines`); Node.js 20 is end-of-life.
- Packages have an `exports` map: only the package entry points can be imported, not files in `dist`.
- `APIMessage` is a union of one type per kind of message; content fields exist only on their kind. Narrow with the
  guards (`isText()`, `isPhoto()`, `isCaptioned()`, `isGroupable()`, ...) or with `message.type`.
- `MessageType` moved to `@telescript/api-types`; `message.type` is the kind of the message, or `null` for a kind this
  version doesn't know yet.
- `message.reply({ text })` and `chat.sendText({ text })` take an options object.
- Chat methods (`sendText`, `sendPhoto`, `forwardMessage`, ...) come from the `ChatActions` mixin; `SendTextAction`
  and `client.chats.sendText()` are removed (use `client.messages.sendText()`).
- Structures are created through a registry: constructors are `(data, owner?)`, and `client.messages.resolve()` etc.
  return client classes. Loading the client makes every structure a client class; `StructureOwner.classes` and
  `Client#classes` are removed. The same owner and data object give the same structure.
- `ExternalReplyInfo.giveaway_winners` is `giveawayWinners`.
- `APIUser.supports_join_request_queries` moved to `APIMethod.GetMe.Result` / `ClientUser`.
- `APIBackgroundFillFreeformGradient.type` is `BackgroundFillType.FreeformGradient`.
- `APIRichBlockTableCell.align` / `valign` are required; `RichBlockTableCell.align` / `valign` are never `null`.
- `APIRefundedPayment.currency` is `'XTR'`.

### Added

- Structures for every Bot API type reachable from messages, including rich messages, communities, suggested posts,
  gifts and checklists; `toJSON()` returns the API data.
- Message actions: `forward()`, `copy()`, `delete()`; `editText()` on text messages and `editCaption()` on messages
  with a caption (animation, audio, document, live photo, paid media, photo, video, voice).
- Events for message reactions, reaction counts, deleted business messages and subscriptions; the
  `stopped_message_generation` update type.
- `ClientEvent.Error`: a listener that throws, or an `async` listener that rejects, no longer stops or crashes the
  bot.
- `client.stop()` and `Polling#stop()`.
- Requester: a per-request `timeout`, abort `signal`, exponential backoff (`retryBaseDelay`), retries of network
  failures and timeouts, and a cap on rate limit retries (`maxRateLimitRetries`).
- Polling retries transient failures with backoff instead of ending, and throws errors that retrying can't fix
  (401 wrong token, 409 another poller or a webhook).

### Fixed

- `mimeType` was missing on animations, audio, documents and videos.
- `bugs` in `package.json` pointed to discord.js.
- Subscription updates skipped the structure registry.
