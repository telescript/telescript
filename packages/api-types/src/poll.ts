import { APIChat } from './chat.js';
import { APIAnimation, APIAudio, APIDocument, APILivePhoto, APIPhotoSize, APISticker, APIVideo } from './media.js';
import {
	APILink,
	APILocation,
	APIMaybeInaccessibleMessage,
	APIMessageEntity,
	APIVenue,
	RepliedToMessageFrom,
} from './message.js';
import { APIUser } from './user.js';

export interface APIPollMedia {
	animation?: APIAnimation;
	audio?: APIAudio;
	document?: APIDocument;
	link?: APILink;
	live_photo?: APILivePhoto;
	location?: APILocation;
	photo?: APIPhotoSize[];
	sticker?: APISticker;
	venue?: APIVenue;
	video?: APIVideo;
}

export interface APIPollOption {
	persistent_id: string;
	text: string;
	text_entities?: APIMessageEntity[];
	media?: APIPollMedia;
	voter_count: number;
	added_by_user?: APIUser;
	added_by_chat?: APIChat;
	addition_date?: number;
}

export enum PollType {
	Regular = 'regular',
	Quiz = 'quiz',
}

export interface APIPoll {
	id: string;
	question: string;
	question_entities?: APIMessageEntity[];
	options: APIPollOption[];
	total_voter_count: number;
	is_closed: boolean;
	is_anonymous: boolean;
	type: PollType;
	allows_multiple_answers: boolean;
	allows_revoting: boolean;
	members_only: boolean;
	country_codes?: string[];
	correct_option_ids?: number[];
	explanation?: string;
	explanation_entities?: APIMessageEntity[];
	explanation_media?: APIPollMedia;
	open_period?: number;
	close_date?: number;
	description?: string;
	description_entities?: APIMessageEntity[];
	media?: APIPollMedia;
}

export interface APIInputPollOption {
	text: string;
	text_parse_mode?: string;
	text_entities?: APIMessageEntity[];
	media?: unknown;
}

export interface APIPollOptionAdded {
	poll_message?: RepliedToMessageFrom<APIMaybeInaccessibleMessage>;
	option_persistent_id: string;
	option_text: string;
	option_text_entities?: APIMessageEntity[];
}

export interface APIPollOptionDeleted {
	poll_message?: RepliedToMessageFrom<APIMaybeInaccessibleMessage>;
	option_persistent_id: string;
	option_text: string;
	option_text_entities?: APIMessageEntity[];
}
