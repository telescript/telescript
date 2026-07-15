import { APIFile } from './file.js';

export interface MediaBase {
	file_id: string;
	file_unique_id: string;
	file_size?: number;
}

export interface SpatialMediaBase {
	width: number;
	height: number;
}

export interface TemporalMediaBase {
	duration: number;
}

export interface ThumbnailedMediaBase {
	thumbnail?: APIPhotoSize;
}

export interface MIMETypedMediaBase {
	mime_type?: string;
}

export interface DescribedMediaBase extends MIMETypedMediaBase {
	file_name?: string;
}

export interface APIPhotoSize extends MediaBase, SpatialMediaBase {}

export interface APIAnimation
	extends MediaBase, SpatialMediaBase, TemporalMediaBase, ThumbnailedMediaBase, DescribedMediaBase {}

export interface APIAudio extends MediaBase, TemporalMediaBase, ThumbnailedMediaBase, DescribedMediaBase {
	performer?: string;
	title?: string;
}

export interface APIDocument extends MediaBase, ThumbnailedMediaBase, DescribedMediaBase {}

export interface APILivePhoto extends MediaBase, SpatialMediaBase, TemporalMediaBase, MIMETypedMediaBase {
	photo?: APIPhotoSize[];
}

export interface APIVideoQuality extends MediaBase, SpatialMediaBase {
	codec: string;
}

export interface APIVideo
	extends MediaBase, SpatialMediaBase, TemporalMediaBase, ThumbnailedMediaBase, DescribedMediaBase {
	cover?: APIPhotoSize[];
	start_timestamp?: number;
	qualities?: APIVideoQuality[];
}

export interface APIVideoNote extends MediaBase, TemporalMediaBase, ThumbnailedMediaBase {
	length: number;
}

export interface APIVoice extends MediaBase, TemporalMediaBase, MIMETypedMediaBase {}

export interface APIPaidMediaInfo {
	star_count: number;
	paid_media: APIPaidMedia[];
}

export enum PaidMediaType {
	LivePhoto = 'live_photo',
	Photo = 'photo',
	Preview = 'preview',
	Video = 'video',
}

export type APIPaidMedia = APIPaidMedia.LivePhoto | APIPaidMedia.Photo | APIPaidMedia.Preview | APIPaidMedia.Video;

export namespace APIPaidMedia {
	export interface Base<Type extends PaidMediaType> {
		type: Type;
	}

	export interface LivePhoto extends Base<PaidMediaType.LivePhoto> {
		live_photo: APILivePhoto;
	}

	export interface Photo extends Base<PaidMediaType.Photo> {
		photo: APIPhotoSize[];
	}

	export interface Preview extends Base<PaidMediaType.Preview> {
		width?: number;
		height?: number;
		duration?: number;
	}

	export interface Video extends Base<PaidMediaType.Video> {
		video: APIVideo;
	}

	export type FromType<Type extends PaidMediaType> = Extract<APIPaidMedia, { type: Type }>;
}

export enum StickerType {
	regular = 'regular',
	mask = 'mask',
	custom_emoji = 'custom_emoji',
}

export interface APISticker extends MediaBase, SpatialMediaBase, ThumbnailedMediaBase {
	type: StickerType;
	is_animated: boolean;
	is_video: boolean;
	emoji?: string;
	set_name?: string;
	premium_animation?: APIFile;
	mask_position?: APIMaskPosition;
	custom_emoji_id?: string;
	needs_repainting?: boolean;
}

export enum MaskPositionPoint {
	forehead = 'forehead',
	eyes = 'eyes',
	mouth = 'mouth',
	chin = 'chin',
}

export interface APIMaskPosition {
	point: MaskPositionPoint;
	x_shift: number;
	y_shift: number;
	scale: number;
}
