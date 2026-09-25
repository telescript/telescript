export interface APICommunityChatAdded {
	community: APICommunity;
}

export interface APICommunityChatJoined {
	community: APICommunity;
}

export interface APICommunityChatRemoved {}

export interface APICommunity {
	id: number;
	name: string;
}
