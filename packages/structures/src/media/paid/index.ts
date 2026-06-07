import { APIPaidMedia, PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { LivePhotoPaidMedia } from './LivePhotoPaidMedia.js';
import { PhotoPaidMedia } from './PhotoPaidMedia.js';
import { PreviewPaidMedia } from './PreviewPaidMedia.js';
import { VideoPaidMedia } from './VideoPaidMedia.js';

export * from './BasePaidMedia.js';
export * from './LivePhotoPaidMedia.js';
export * from './PhotoPaidMedia.js';
export * from './PreviewPaidMedia.js';
export * from './VideoPaidMedia.js';

export type PaidMedia = BasePaidMedia<never> | LivePhotoPaidMedia | PhotoPaidMedia | PreviewPaidMedia | VideoPaidMedia;

export function createPaidMedia(data: APIPaidMedia): PaidMedia {
	switch (data.type) {
		case PaidMediaType.LivePhoto:
			return new LivePhotoPaidMedia(data);
		case PaidMediaType.Photo:
			return new PhotoPaidMedia(data);
		case PaidMediaType.Preview:
			return new PreviewPaidMedia(data);
		case PaidMediaType.Video:
			return new VideoPaidMedia(data);
		default:
			return new BasePaidMedia<never>(data);
	}
}
