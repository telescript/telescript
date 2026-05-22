import type { PollingOptions } from './Polling.js';

export const DefaultPollingOptions = {
	timeout: 30,
} as const satisfies PollingOptions;
