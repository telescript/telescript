import { APIAudio, APIPhotoSize } from './media.js';
import { APIWebAppInfo } from './message.js';

export interface APIUser {
	id: number;
	is_bot: boolean;
	first_name: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	is_premium?: boolean;
	added_to_attachment_menu?: boolean;
}

export interface APIUserProfilePhotos {
	total_count: number;
	photos: APIPhotoSize[][];
}

export interface APIUserProfileAudios {
	total_count: number;
	audios: APIAudio[];
}

export interface APIBotAccessSettings {
	is_access_restricted: boolean;
	added_users?: APIUser[];
}

export interface APIBotName {
	name: string;
}

export interface APIBotDescription {
	description: string;
}

export interface APIBotShortDescription {
	short_description: string;
}

export enum MenuButtonType {
	Commands = 'commands',
	WebApp = 'web_app',
	Default = 'default',
}

export type APIMenuButton = APIMenuButton.Commands | APIMenuButton.WebApp | APIMenuButton.Default;

export namespace APIMenuButton {
	export interface Base<Type extends MenuButtonType> {
		type: Type;
	}

	export interface Commands extends Base<MenuButtonType.Commands> {}

	export interface WebApp extends Base<MenuButtonType.WebApp> {
		text: string;
		web_app: APIWebAppInfo;
	}

	export interface Default extends Base<MenuButtonType.Default> {}

	export type FromType<Type extends MenuButtonType> = Extract<APIMenuButton, { type: Type }>;
}
