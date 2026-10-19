import { APIPaidMedia, PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia } from './BasePaidMedia.js';
import { LivePhotoPaidMedia } from './LivePhotoPaidMedia.js';
import { PhotoPaidMedia } from './PhotoPaidMedia.js';
import { PreviewPaidMedia } from './PreviewPaidMedia.js';
import { VideoPaidMedia } from './VideoPaidMedia.js';
import {
	createStructure,
	defaultOwner,
	registerStructures,
	type StructureOwner,
	type Resolve,
} from '../../registry.js';

export * from './BasePaidMedia.js';
export * from './LivePhotoPaidMedia.js';
export * from './PhotoPaidMedia.js';
export * from './PreviewPaidMedia.js';
export * from './VideoPaidMedia.js';

export type PaidMedia =
	| Resolve<'BasePaidMedia'>
	| Resolve<'LivePhotoPaidMedia'>
	| Resolve<'PhotoPaidMedia'>
	| Resolve<'PreviewPaidMedia'>
	| Resolve<'VideoPaidMedia'>;

export function createPaidMedia(data: APIPaidMedia, owner: StructureOwner = defaultOwner): PaidMedia {
	switch (data.type) {
		case PaidMediaType.LivePhoto:
			return createStructure(owner, 'LivePhotoPaidMedia', data);
		case PaidMediaType.Photo:
			return createStructure(owner, 'PhotoPaidMedia', data);
		case PaidMediaType.Preview:
			return createStructure(owner, 'PreviewPaidMedia', data);
		case PaidMediaType.Video:
			return createStructure(owner, 'VideoPaidMedia', data);
		default:
			return createStructure(owner, 'BasePaidMedia', data);
	}
}

declare module '../../registry.js' {
	interface DefaultTypes {
		BasePaidMedia: BasePaidMedia<never>;
		LivePhotoPaidMedia: LivePhotoPaidMedia;
		PhotoPaidMedia: PhotoPaidMedia;
		PreviewPaidMedia: PreviewPaidMedia;
		VideoPaidMedia: VideoPaidMedia;
	}
}

registerStructures({ BasePaidMedia, LivePhotoPaidMedia, PhotoPaidMedia, PreviewPaidMedia, VideoPaidMedia });
