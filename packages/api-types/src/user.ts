export interface APIUser {
	id: number;
	is_bot: boolean;
	first_name: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	is_premium?: true;
	added_to_attachment_menu?: true;
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
