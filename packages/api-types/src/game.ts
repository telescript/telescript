import { APIAnimation, APIPhotoSize } from './media.js';
import { APIMessageEntity } from './message.js';

export interface APIGame {
	title: string;
	description: string;
	photo: APIPhotoSize[];
	text?: string;
	text_entities?: APIMessageEntity[];
	animation?: APIAnimation;
}

export interface APICallbackGame {}
