import type { RequesterOptions } from './Requester.js';

export const DefaultRequesterOptions = {
	api: 'https://api.telegram.org',
	maxRetries: 3,
	retryAfter: 3000,
} as const satisfies RequesterOptions;
