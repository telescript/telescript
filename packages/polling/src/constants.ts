import type { PollingOptions } from './Polling.js';

export const DefaultPollingOptions = {
	timeout: 30,
	retryDelay: 1000,
	maxRetryDelay: 60_000,
} as const satisfies PollingOptions;
