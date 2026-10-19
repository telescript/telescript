import type { RequesterOptions } from './Requester.js';

export const DefaultRequesterOptions = {
	api: 'https://api.telegram.org',
	maxHttpErrorRetries: 3,
	maxRateLimitRetries: 5,
	retryOnRateLimitedAfter: 3000,
	retryBaseDelay: 1000,
	timeout: 30_000,
} as const satisfies RequesterOptions;
