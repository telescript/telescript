import type { RequesterOptions } from './Requester';

export const DefaultRequesterOptions = {
	api: 'https://api.telegram.org',
	maxRetries: 3,
} as const satisfies RequesterOptions;
