export interface Chat {
	id: number;
	type: ChatType;
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
	is_forum?: true;
	is_direct_messages?: true;
}

export enum ChatType {
	Private = 'private',
	Group = 'group',
	Supergroup = 'supergroup',
	Channel = 'channel',
}
