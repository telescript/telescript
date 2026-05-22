import type { PollingOptions } from './Polling';

export const DefaultPollingOptions = {
	timeout: 30,
} as const satisfies PollingOptions;
