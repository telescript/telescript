import type { RequesterOptions } from './Requester.js';

export const DefaultRequesterOptions = {
	api: 'https://api.telegram.org',
	maxHttpErrorRetries: 3,
	retryOnRateLimitedAfter: 3000,
} as const satisfies RequesterOptions;
