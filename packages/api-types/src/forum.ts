export interface APIForumTopicCreated {
	name: string;
	icon_color: number;
	icon_custom_emoji_id?: string;
	is_name_implicit?: true;
}

export interface APIForumTopicClosed {}

export interface APIForumTopicEdited {
	name?: string;
	icon_custom_emoji_id?: string;
}

export interface APIForumTopicReopened {}

export interface APIGeneralForumTopicHidden {}

export interface APIGeneralForumTopicUnhidden {}
