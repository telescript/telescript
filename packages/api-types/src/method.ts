import {
	APIAcceptedGiftTypes,
	APIChatAdministratorRights,
	APIChatFullInfo,
	APIChatPermissions,
	APIReactionType,
} from './chat.js';
import { APIFile, InputFile } from './file.js';
import {
	APIForceReply,
	APIInlineKeyboardMarkup,
	APIKeyboardButton,
	APIReplyKeyboardMarkup,
	APIReplyKeyboardRemove,
} from './keyboard.js';
import { APIMaskPosition, APISticker } from './media.js';
import {
	APIEphemeralMessageParameters,
	APILinkPreviewOptions,
	APIMessage,
	APIMessageEntity,
	APIMessageId,
	APIReplyParameters,
	APIStory,
} from './message.js';
import { APIStarAmount } from './payments.js';
import { APIInputPollOption, APIPoll, PollType } from './poll.js';
import { APISuggestedPostParameters } from './suggested-post.js';
import { APIBusinessConnection, APIChatInviteLink, APIChatMember, APIUpdate } from './update.js';
import { APIUser } from './user.js';

export enum APIMethod {
	GetUpdates = 'getUpdates',
	SetWebhook = 'setWebhook',
	DeleteWebhook = 'deleteWebhook',
	GetWebhookInfo = 'getWebhookInfo',
	GetMe = 'getMe',
	LogOut = 'logOut',
	Close = 'close',
	SendMessage = 'sendMessage',
	ForwardMessage = 'forwardMessage',
	ForwardMessages = 'forwardMessages',
	CopyMessage = 'copyMessage',
	CopyMessages = 'copyMessages',
	SendPhoto = 'sendPhoto',
	SendLivePhoto = 'sendLivePhoto',
	SendAudio = 'sendAudio',
	SendDocument = 'sendDocument',
	SendVideo = 'sendVideo',
	SendAnimation = 'sendAnimation',
	SendVoice = 'sendVoice',
	SendVideoNote = 'sendVideoNote',
	SendPaidMedia = 'sendPaidMedia',
	SendMediaGroup = 'sendMediaGroup',
	SendLocation = 'sendLocation',
	SendVenue = 'sendVenue',
	SendContact = 'sendContact',
	SendPoll = 'sendPoll',
	SendChecklist = 'sendChecklist',
	SendDice = 'sendDice',
	SendMessageDraft = 'sendMessageDraft',
	SendChatAction = 'sendChatAction',
	SetMessageReaction = 'setMessageReaction',
	GetUserProfilePhotos = 'getUserProfilePhotos',
	GetUserProfileAudios = 'getUserProfileAudios',
	SetUserEmojiStatus = 'setUserEmojiStatus',
	GetFile = 'getFile',
	BanChatMember = 'banChatMember',
	UnbanChatMember = 'unbanChatMember',
	RestrictChatMember = 'restrictChatMember',
	PromoteChatMember = 'promoteChatMember',
	SetChatAdministratorCustomTitle = 'setChatAdministratorCustomTitle',
	SetChatMemberTag = 'setChatMemberTag',
	BanChatSenderChat = 'banChatSenderChat',
	UnbanChatSenderChat = 'unbanChatSenderChat',
	SetChatPermissions = 'setChatPermissions',
	ExportChatInviteLink = 'exportChatInviteLink',
	CreateChatInviteLink = 'createChatInviteLink',
	EditChatInviteLink = 'editChatInviteLink',
	CreateChatSubscriptionInviteLink = 'createChatSubscriptionInviteLink',
	EditChatSubscriptionInviteLink = 'editChatSubscriptionInviteLink',
	RevokeChatInviteLink = 'revokeChatInviteLink',
	ApproveChatJoinRequest = 'approveChatJoinRequest',
	DeclineChatJoinRequest = 'declineChatJoinRequest',
	AnswerChatJoinRequestQuery = 'answerChatJoinRequestQuery',
	SendChatJoinRequestWebApp = 'sendChatJoinRequestWebApp',
	SetChatPhoto = 'setChatPhoto',
	DeleteChatPhoto = 'deleteChatPhoto',
	SetChatTitle = 'setChatTitle',
	SetChatDescription = 'setChatDescription',
	PinChatMessage = 'pinChatMessage',
	UnpinChatMessage = 'unpinChatMessage',
	UnpinAllChatMessages = 'unpinAllChatMessages',
	LeaveChat = 'leaveChat',
	GetChat = 'getChat',
	GetChatAdministrators = 'getChatAdministrators',
	GetChatMemberCount = 'getChatMemberCount',
	GetChatMember = 'getChatMember',
	GetUserPersonalChatMessages = 'getUserPersonalChatMessages',
	SetChatStickerSet = 'setChatStickerSet',
	DeleteChatStickerSet = 'deleteChatStickerSet',
	GetForumTopicIconStickers = 'getForumTopicIconStickers',
	CreateForumTopic = 'createForumTopic',
	EditForumTopic = 'editForumTopic',
	CloseForumTopic = 'closeForumTopic',
	ReopenForumTopic = 'reopenForumTopic',
	DeleteForumTopic = 'deleteForumTopic',
	UnpinAllForumTopicMessages = 'unpinAllForumTopicMessages',
	EditGeneralForumTopic = 'editGeneralForumTopic',
	CloseGeneralForumTopic = 'closeGeneralForumTopic',
	ReopenGeneralForumTopic = 'reopenGeneralForumTopic',
	HideGeneralForumTopic = 'hideGeneralForumTopic',
	UnhideGeneralForumTopic = 'unhideGeneralForumTopic',
	UnpinAllGeneralForumTopicMessages = 'unpinAllGeneralForumTopicMessages',
	AnswerCallbackQuery = 'answerCallbackQuery',
	AnswerGuestQuery = 'answerGuestQuery',
	GetUserChatBoosts = 'getUserChatBoosts',
	GetBusinessConnection = 'getBusinessConnection',
	GetManagedBotToken = 'getManagedBotToken',
	ReplaceManagedBotToken = 'replaceManagedBotToken',
	GetManagedBotAccessSettings = 'getManagedBotAccessSettings',
	SetManagedBotAccessSettings = 'setManagedBotAccessSettings',
	SetMyCommands = 'setMyCommands',
	DeleteMyCommands = 'deleteMyCommands',
	GetMyCommands = 'getMyCommands',
	SetMyName = 'setMyName',
	GetMyName = 'getMyName',
	SetMyDescription = 'setMyDescription',
	GetMyDescription = 'getMyDescription',
	SetMyShortDescription = 'setMyShortDescription',
	GetMyShortDescription = 'getMyShortDescription',
	SetMyProfilePhoto = 'setMyProfilePhoto',
	RemoveMyProfilePhoto = 'removeMyProfilePhoto',
	SetChatMenuButton = 'setChatMenuButton',
	GetChatMenuButton = 'getChatMenuButton',
	SetMyDefaultAdministratorRights = 'setMyDefaultAdministratorRights',
	GetMyDefaultAdministratorRights = 'getMyDefaultAdministratorRights',
	GetAvailableGifts = 'getAvailableGifts',
	SendGift = 'sendGift',
	GiftPremiumSubscription = 'giftPremiumSubscription',
	VerifyUser = 'verifyUser',
	VerifyChat = 'verifyChat',
	RemoveUserVerification = 'removeUserVerification',
	RemoveChatVerification = 'removeChatVerification',
	ReadBusinessMessage = 'readBusinessMessage',
	DeleteBusinessMessages = 'deleteBusinessMessages',
	SetBusinessAccountName = 'setBusinessAccountName',
	SetBusinessAccountUsername = 'setBusinessAccountUsername',
	SetBusinessAccountBio = 'setBusinessAccountBio',
	SetBusinessAccountProfilePhoto = 'setBusinessAccountProfilePhoto',
	RemoveBusinessAccountProfilePhoto = 'removeBusinessAccountProfilePhoto',
	SetBusinessAccountGiftSettings = 'setBusinessAccountGiftSettings',
	GetBusinessAccountStarBalance = 'getBusinessAccountStarBalance',
	TransferBusinessAccountStars = 'transferBusinessAccountStars',
	GetBusinessAccountGifts = 'getBusinessAccountGifts',
	GetUserGifts = 'getUserGifts',
	GetChatGifts = 'getChatGifts',
	ConvertGiftToStars = 'convertGiftToStars',
	UpgradeGift = 'upgradeGift',
	TransferGift = 'transferGift',
	PostStory = 'postStory',
	RepostStory = 'repostStory',
	EditStory = 'editStory',
	DeleteStory = 'deleteStory',
	AnswerWebAppQuery = 'answerWebAppQuery',
	SavePreparedInlineMessage = 'savePreparedInlineMessage',
	SavePreparedKeyboardButton = 'savePreparedKeyboardButton',
	EditMessageText = 'editMessageText',
	EditMessageCaption = 'editMessageCaption',
	EditMessageMedia = 'editMessageMedia',
	EditMessageLiveLocation = 'editMessageLiveLocation',
	StopMessageLiveLocation = 'stopMessageLiveLocation',
	EditMessageChecklist = 'editMessageChecklist',
	EditMessageReplyMarkup = 'editMessageReplyMarkup',
	StopPoll = 'stopPoll',
	EditEphemeralMessageText = 'editEphemeralMessageText',
	EditEphemeralMessageMedia = 'editEphemeralMessageMedia',
	EditEphemeralMessageCaption = 'editEphemeralMessageCaption',
	EditEphemeralMessageReplyMarkup = 'editEphemeralMessageReplyMarkup',
	ApproveSuggestedPost = 'approveSuggestedPost',
	DeclineSuggestedPost = 'declineSuggestedPost',
	DeleteMessage = 'deleteMessage',
	DeleteMessages = 'deleteMessages',
	DeleteEphemeralMessage = 'deleteEphemeralMessage',
	DeleteMessageReaction = 'deleteMessageReaction',
	DeleteAllMessageReactions = 'deleteAllMessageReactions',
	SendSticker = 'sendSticker',
	GetStickerSet = 'getStickerSet',
	GetCustomEmojiStickers = 'getCustomEmojiStickers',
	UploadStickerFile = 'uploadStickerFile',
	CreateNewStickerSet = 'createNewStickerSet',
	AddStickerToSet = 'addStickerToSet',
	SetStickerPositionInSet = 'setStickerPositionInSet',
	DeleteStickerFromSet = 'deleteStickerFromSet',
	ReplaceStickerInSet = 'replaceStickerInSet',
	SetStickerEmojiList = 'setStickerEmojiList',
	SetStickerKeywords = 'setStickerKeywords',
	SetStickerMaskPosition = 'setStickerMaskPosition',
	SetStickerSetTitle = 'setStickerSetTitle',
	SetStickerSetThumbnail = 'setStickerSetThumbnail',
	SetCustomEmojiStickerSetThumbnail = 'setCustomEmojiStickerSetThumbnail',
	DeleteStickerSet = 'deleteStickerSet',
	SendRichMessage = 'sendRichMessage',
	SendRichMessageDraft = 'sendRichMessageDraft',
	AnswerInlineQuery = 'answerInlineQuery',
	SendInvoice = 'sendInvoice',
	CreateInvoiceLink = 'createInvoiceLink',
	AnswerShippingQuery = 'answerShippingQuery',
	AnswerPreCheckoutQuery = 'answerPreCheckoutQuery',
	GetMyStarBalance = 'getMyStarBalance',
	GetStarTransactions = 'getStarTransactions',
	RefundStarPayment = 'refundStarPayment',
	EditUserStarSubscription = 'editUserStarSubscription',
	SetPassportDataErrors = 'setPassportDataErrors',
	SendGame = 'sendGame',
	SetGameScore = 'setGameScore',
	GetGameHighScores = 'getGameHighScores',
}

export namespace APIMethod {
	export namespace GetUpdates {
		export interface Params {
			offset?: number;
			limit?: number;
			timeout?: number;
			allowed_updates?: string[];
		}

		export type Result = APIUpdate[];
	}

	export namespace SetWebhook {
		export interface Params {
			url: string;
			certificate?: InputFile;
			ip_address?: string;
			max_connections?: number;
			allowed_updates?: string[];
			drop_pending_updates?: boolean;
			secret_token?: string;
		}

		export type Result = true;
	}

	export namespace DeleteWebhook {
		export interface Params {
			drop_pending_updates?: boolean;
		}

		export type Result = true;
	}

	export namespace GetWebhookInfo {
		export type Result = unknown;
	}

	export namespace GetMe {
		export interface Result extends APIUser {
			is_bot: true;
			username: string;
			can_join_groups: boolean;
			can_read_all_group_messages: boolean;
			supports_guest_queries: boolean;
			supports_inline_queries: boolean;
			can_connect_to_business: boolean;
			has_main_web_app: boolean;
			has_topics_enabled: boolean;
			allows_users_to_create_topics: boolean;
			can_manage_bots: boolean;
			supports_join_request_queries: boolean;
		}
	}

	export namespace LogOut {
		export type Result = true;
	}

	export namespace Close {
		export type Result = true;
	}

	export namespace SendMessage {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			text: string;
			parse_mode?: string;
			entities?: APIMessageEntity[];
			link_preview_options?: APILinkPreviewOptions;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace ForwardMessage {
		export interface Params {
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			from_chat_id: number | string;
			video_start_timestamp?: number;
			disable_notification?: boolean;
			protect_content?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			message_id: number;
		}

		export type Result = APIMessage;
	}

	export namespace ForwardMessages {
		export interface Params {
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			from_chat_id: number | string;
			message_ids: number[];
			disable_notification?: boolean;
			protect_content?: boolean;
		}

		export type Result = APIMessageId[];
	}

	export namespace CopyMessage {
		export interface Params {
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			from_chat_id: number | string;
			message_id: number;
			video_start_timestamp?: number;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			show_caption_above_media?: boolean;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessageId;
	}

	export namespace CopyMessages {
		export interface Params {
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			from_chat_id: number | string;
			message_ids: number[];
			disable_notification?: boolean;
			protect_content?: boolean;
			remove_caption?: boolean;
		}

		export type Result = APIMessageId[];
	}

	export namespace SendPhoto {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			photo: InputFile | string;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			show_caption_above_media?: boolean;
			has_spoiler?: boolean;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendLivePhoto {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			live_photo: InputFile | string;
			photo: InputFile | string;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			show_caption_above_media?: boolean;
			has_spoiler?: boolean;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendAudio {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			audio: InputFile | string;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			duration?: number;
			performer?: string;
			title?: string;
			thumbnail?: InputFile | string;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendDocument {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			document: InputFile | string;
			thumbnail?: InputFile | string;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			disable_content_type_detection?: boolean;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendVideo {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			video: InputFile | string;
			duration?: number;
			width?: number;
			height?: number;
			thumbnail?: InputFile | string;
			cover?: InputFile | string;
			start_timestamp?: number;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			show_caption_above_media?: boolean;
			has_spoiler?: boolean;
			supports_streaming?: boolean;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendAnimation {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			animation: InputFile | string;
			duration?: number;
			width?: number;
			height?: number;
			thumbnail?: InputFile | string;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			show_caption_above_media?: boolean;
			has_spoiler?: boolean;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendVoice {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			voice: InputFile | string;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			duration?: number;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendVideoNote {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			video_note: InputFile | string;
			duration?: number;
			length?: number;
			thumbnail?: InputFile | string;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendPaidMedia {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			star_count: number;
			media: unknown[];
			payload?: string;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			show_caption_above_media?: boolean;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendMediaGroup {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			media: unknown[];
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			reply_parameters?: APIReplyParameters;
		}

		export type Result = APIMessage[];
	}

	export namespace SendLocation {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			latitude: number;
			longitude: number;
			horizontal_accuracy?: number;
			live_period?: number;
			heading?: number;
			proximity_alert_radius?: number;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendVenue {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			latitude: number;
			longitude: number;
			title: string;
			address: string;
			foursquare_id?: string;
			foursquare_type?: string;
			google_place_id?: string;
			google_place_type?: string;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendContact {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			phone_number: string;
			first_name: string;
			last_name?: string;
			vcard?: string;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendPoll {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			question: string;
			question_parse_mode?: string;
			question_entities?: APIMessageEntity[];
			options: APIInputPollOption[];
			is_anonymous?: boolean;
			type?: PollType;
			allows_multiple_answers?: boolean;
			allows_revoting?: boolean;
			shuffle_options?: boolean;
			allow_adding_options?: boolean;
			hide_results_until_closes?: boolean;
			members_only?: boolean;
			country_codes?: string[];
			correct_option_ids?: number[];
			explanation?: string;
			explanation_parse_mode?: string;
			explanation_entities?: APIMessageEntity[];
			explanation_media?: unknown;
			open_period?: number;
			close_date?: number;
			is_closed?: boolean;
			description?: string;
			description_parse_mode?: string;
			description_entities?: APIMessageEntity[];
			media?: unknown;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendChecklist {
		export interface Params {
			business_connection_id: string;
			chat_id: number | string;
			checklist: unknown;
			disable_notification?: boolean;
			protect_content?: boolean;
			message_effect_id?: string;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage;
	}

	export namespace SendDice {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			emoji?: string;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendMessageDraft {
		export interface Params {
			chat_id: number;
			message_thread_id?: number;
			draft_id: number;
			text?: string;
			parse_mode?: string;
			entities?: APIMessageEntity[];
			can_stop?: boolean;
			keep_on_stop?: boolean;
		}

		export type Result = true;
	}

	export namespace SendChatAction {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			action: string;
		}

		export type Result = true;
	}

	export namespace SetMessageReaction {
		export interface Params {
			chat_id: number | string;
			message_id: number;
			reaction?: APIReactionType[];
			is_big?: boolean;
		}

		export type Result = true;
	}

	export namespace GetUserProfilePhotos {
		export interface Params {
			user_id: number;
			offset?: number;
			limit?: number;
		}

		export type Result = unknown;
	}

	export namespace GetUserProfileAudios {
		export interface Params {
			user_id: number;
			offset?: number;
			limit?: number;
		}

		export type Result = unknown;
	}

	export namespace SetUserEmojiStatus {
		export interface Params {
			user_id: number;
			emoji_status_custom_emoji_id?: string;
			emoji_status_expiration_date?: number;
		}

		export type Result = true;
	}

	export namespace GetFile {
		export interface Params {
			file_id: string;
		}

		export type Result = APIFile;
	}

	export namespace BanChatMember {
		export interface Params {
			chat_id: number | string;
			user_id: number;
			until_date?: number;
			revoke_messages?: boolean;
		}

		export type Result = true;
	}

	export namespace UnbanChatMember {
		export interface Params {
			chat_id: number | string;
			user_id: number;
			only_if_banned?: boolean;
		}

		export type Result = true;
	}

	export namespace RestrictChatMember {
		export interface Params {
			chat_id: number | string;
			user_id: number;
			permissions: APIChatPermissions;
			use_independent_chat_permissions?: boolean;
			until_date?: number;
		}

		export type Result = true;
	}

	export namespace PromoteChatMember {
		export interface Params {
			chat_id: number | string;
			user_id: number;
			is_anonymous?: boolean;
			can_manage_chat?: boolean;
			can_delete_messages?: boolean;
			can_manage_video_chats?: boolean;
			can_restrict_members?: boolean;
			can_promote_members?: boolean;
			can_change_info?: boolean;
			can_invite_users?: boolean;
			can_post_stories?: boolean;
			can_edit_stories?: boolean;
			can_delete_stories?: boolean;
			can_post_messages?: boolean;
			can_edit_messages?: boolean;
			can_pin_messages?: boolean;
			can_manage_topics?: boolean;
			can_manage_direct_messages?: boolean;
			can_manage_tags?: boolean;
			can_send_welcome_messages?: boolean;
		}

		export type Result = true;
	}

	export namespace SetChatAdministratorCustomTitle {
		export interface Params {
			chat_id: number | string;
			user_id: number;
			custom_title: string;
		}

		export type Result = true;
	}

	export namespace SetChatMemberTag {
		export interface Params {
			chat_id: number | string;
			user_id: number;
			tag?: string;
		}

		export type Result = true;
	}

	export namespace BanChatSenderChat {
		export interface Params {
			chat_id: number | string;
			sender_chat_id: number;
		}

		export type Result = true;
	}

	export namespace UnbanChatSenderChat {
		export interface Params {
			chat_id: number | string;
			sender_chat_id: number;
		}

		export type Result = true;
	}

	export namespace SetChatPermissions {
		export interface Params {
			chat_id: number | string;
			permissions: APIChatPermissions;
			use_independent_chat_permissions?: boolean;
		}

		export type Result = true;
	}

	export namespace ExportChatInviteLink {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = string;
	}

	export namespace CreateChatInviteLink {
		export interface Params {
			chat_id: number | string;
			name?: string;
			expire_date?: number;
			member_limit?: number;
			creates_join_request?: boolean;
		}

		export type Result = APIChatInviteLink;
	}

	export namespace EditChatInviteLink {
		export interface Params {
			chat_id: number | string;
			invite_link: string;
			name?: string;
			expire_date?: number;
			member_limit?: number;
			creates_join_request?: boolean;
		}

		export type Result = APIChatInviteLink;
	}

	export namespace CreateChatSubscriptionInviteLink {
		export interface Params {
			chat_id: number | string;
			name?: string;
			subscription_period: number;
			subscription_price: number;
		}

		export type Result = APIChatInviteLink;
	}

	export namespace EditChatSubscriptionInviteLink {
		export interface Params {
			chat_id: number | string;
			invite_link: string;
			name?: string;
		}

		export type Result = APIChatInviteLink;
	}

	export namespace RevokeChatInviteLink {
		export interface Params {
			chat_id: number | string;
			invite_link: string;
		}

		export type Result = APIChatInviteLink;
	}

	export namespace ApproveChatJoinRequest {
		export interface Params {
			chat_id: number | string;
			user_id: number;
		}

		export type Result = true;
	}

	export namespace DeclineChatJoinRequest {
		export interface Params {
			chat_id: number | string;
			user_id: number;
		}

		export type Result = true;
	}

	export namespace AnswerChatJoinRequestQuery {
		export interface Params {
			chat_join_request_query_id: string;
			result: string;
		}

		export type Result = true;
	}

	export namespace SendChatJoinRequestWebApp {
		export interface Params {
			chat_join_request_query_id: string;
			web_app_url: string;
		}

		export type Result = true;
	}

	export namespace SetChatPhoto {
		export interface Params {
			chat_id: number | string;
			photo: InputFile;
		}

		export type Result = true;
	}

	export namespace DeleteChatPhoto {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace SetChatTitle {
		export interface Params {
			chat_id: number | string;
			title: string;
		}

		export type Result = true;
	}

	export namespace SetChatDescription {
		export interface Params {
			chat_id: number | string;
			description?: string;
		}

		export type Result = true;
	}

	export namespace PinChatMessage {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_id: number;
			disable_notification?: boolean;
		}

		export type Result = true;
	}

	export namespace UnpinChatMessage {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_id?: number;
		}

		export type Result = true;
	}

	export namespace UnpinAllChatMessages {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace LeaveChat {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace GetChat {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = APIChatFullInfo;
	}

	export namespace GetChatAdministrators {
		export interface Params {
			chat_id: number | string;
			return_bots?: boolean;
		}

		export type Result = APIChatMember[];
	}

	export namespace GetChatMemberCount {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = number;
	}

	export namespace GetChatMember {
		export interface Params {
			chat_id: number | string;
			user_id: number;
		}

		export type Result = APIChatMember;
	}

	export namespace GetUserPersonalChatMessages {
		export interface Params {
			user_id: number;
			limit: number;
		}

		export type Result = APIMessage[];
	}

	export namespace SetChatStickerSet {
		export interface Params {
			chat_id: number | string;
			sticker_set_name: string;
		}

		export type Result = true;
	}

	export namespace DeleteChatStickerSet {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace GetForumTopicIconStickers {
		export type Result = APISticker[];
	}

	export namespace CreateForumTopic {
		export interface Params {
			chat_id: number | string;
			name: string;
			icon_color?: number;
			icon_custom_emoji_id?: string;
		}

		export type Result = unknown;
	}

	export namespace EditForumTopic {
		export interface Params {
			chat_id: number | string;
			message_thread_id: number;
			name?: string;
			icon_custom_emoji_id?: string;
		}

		export type Result = true;
	}

	export namespace CloseForumTopic {
		export interface Params {
			chat_id: number | string;
			message_thread_id: number;
		}

		export type Result = true;
	}

	export namespace ReopenForumTopic {
		export interface Params {
			chat_id: number | string;
			message_thread_id: number;
		}

		export type Result = true;
	}

	export namespace DeleteForumTopic {
		export interface Params {
			chat_id: number | string;
			message_thread_id: number;
		}

		export type Result = true;
	}

	export namespace UnpinAllForumTopicMessages {
		export interface Params {
			chat_id: number | string;
			message_thread_id: number;
		}

		export type Result = true;
	}

	export namespace EditGeneralForumTopic {
		export interface Params {
			chat_id: number | string;
			name: string;
		}

		export type Result = true;
	}

	export namespace CloseGeneralForumTopic {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace ReopenGeneralForumTopic {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace HideGeneralForumTopic {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace UnhideGeneralForumTopic {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace UnpinAllGeneralForumTopicMessages {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace AnswerCallbackQuery {
		export interface Params {
			callback_query_id: string;
			text?: string;
			show_alert?: boolean;
			url?: string;
			cache_time?: number;
		}

		export type Result = true;
	}

	export namespace AnswerGuestQuery {
		export interface Params {
			guest_query_id: string;
			result: unknown;
		}

		export type Result = unknown;
	}

	export namespace GetUserChatBoosts {
		export interface Params {
			chat_id: number | string;
			user_id: number;
		}

		export type Result = unknown;
	}

	export namespace GetBusinessConnection {
		export interface Params {
			business_connection_id: string;
		}

		export type Result = APIBusinessConnection;
	}

	export namespace GetManagedBotToken {
		export interface Params {
			user_id: number;
		}

		export type Result = string;
	}

	export namespace ReplaceManagedBotToken {
		export interface Params {
			user_id: number;
		}

		export type Result = string;
	}

	export namespace GetManagedBotAccessSettings {
		export interface Params {
			user_id: number;
		}

		export type Result = unknown;
	}

	export namespace SetManagedBotAccessSettings {
		export interface Params {
			user_id: number;
			is_access_restricted: boolean;
			added_user_ids?: number[];
		}

		export type Result = true;
	}

	export namespace SetMyCommands {
		export interface Params {
			commands: unknown[];
			scope?: unknown;
			language_code?: string;
		}

		export type Result = true;
	}

	export namespace DeleteMyCommands {
		export interface Params {
			scope?: unknown;
			language_code?: string;
		}

		export type Result = true;
	}

	export namespace GetMyCommands {
		export interface Params {
			scope?: unknown;
			language_code?: string;
		}

		export type Result = unknown[];
	}

	export namespace SetMyName {
		export interface Params {
			name?: string;
			language_code?: string;
		}

		export type Result = true;
	}

	export namespace GetMyName {
		export interface Params {
			language_code?: string;
		}

		export type Result = unknown;
	}

	export namespace SetMyDescription {
		export interface Params {
			description?: string;
			language_code?: string;
		}

		export type Result = true;
	}

	export namespace GetMyDescription {
		export interface Params {
			language_code?: string;
		}

		export type Result = unknown;
	}

	export namespace SetMyShortDescription {
		export interface Params {
			short_description?: string;
			language_code?: string;
		}

		export type Result = true;
	}

	export namespace GetMyShortDescription {
		export interface Params {
			language_code?: string;
		}

		export type Result = unknown;
	}

	export namespace SetMyProfilePhoto {
		export interface Params {
			photo: unknown;
		}

		export type Result = true;
	}

	export namespace RemoveMyProfilePhoto {
		export type Result = true;
	}

	export namespace SetChatMenuButton {
		export interface Params {
			chat_id?: number;
			menu_button?: unknown;
		}

		export type Result = true;
	}

	export namespace GetChatMenuButton {
		export interface Params {
			chat_id?: number;
		}

		export type Result = unknown;
	}

	export namespace SetMyDefaultAdministratorRights {
		export interface Params {
			rights?: APIChatAdministratorRights;
			for_channels?: boolean;
		}

		export type Result = true;
	}

	export namespace GetMyDefaultAdministratorRights {
		export interface Params {
			for_channels?: boolean;
		}

		export type Result = APIChatAdministratorRights;
	}

	export namespace GetAvailableGifts {
		export type Result = unknown;
	}

	export namespace SendGift {
		export interface Params {
			user_id?: number;
			chat_id?: number | string;
			gift_id: string;
			pay_for_upgrade?: boolean;
			text?: string;
			text_parse_mode?: string;
			text_entities?: APIMessageEntity[];
		}

		export type Result = true;
	}

	export namespace GiftPremiumSubscription {
		export interface Params {
			user_id: number;
			month_count: number;
			star_count: number;
			text?: string;
			text_parse_mode?: string;
			text_entities?: APIMessageEntity[];
		}

		export type Result = true;
	}

	export namespace VerifyUser {
		export interface Params {
			user_id: number;
			custom_description?: string;
		}

		export type Result = true;
	}

	export namespace VerifyChat {
		export interface Params {
			chat_id: number | string;
			custom_description?: string;
		}

		export type Result = true;
	}

	export namespace RemoveUserVerification {
		export interface Params {
			user_id: number;
		}

		export type Result = true;
	}

	export namespace RemoveChatVerification {
		export interface Params {
			chat_id: number | string;
		}

		export type Result = true;
	}

	export namespace ReadBusinessMessage {
		export interface Params {
			business_connection_id: string;
			chat_id: number;
			message_id: number;
		}

		export type Result = true;
	}

	export namespace DeleteBusinessMessages {
		export interface Params {
			business_connection_id: string;
			message_ids: number[];
		}

		export type Result = true;
	}

	export namespace SetBusinessAccountName {
		export interface Params {
			business_connection_id: string;
			first_name: string;
			last_name?: string;
		}

		export type Result = true;
	}

	export namespace SetBusinessAccountUsername {
		export interface Params {
			business_connection_id: string;
			username?: string;
		}

		export type Result = true;
	}

	export namespace SetBusinessAccountBio {
		export interface Params {
			business_connection_id: string;
			bio?: string;
		}

		export type Result = true;
	}

	export namespace SetBusinessAccountProfilePhoto {
		export interface Params {
			business_connection_id: string;
			photo: unknown;
			is_public?: boolean;
		}

		export type Result = true;
	}

	export namespace RemoveBusinessAccountProfilePhoto {
		export interface Params {
			business_connection_id: string;
			is_public?: boolean;
		}

		export type Result = true;
	}

	export namespace SetBusinessAccountGiftSettings {
		export interface Params {
			business_connection_id: string;
			show_gift_button: boolean;
			accepted_gift_types: APIAcceptedGiftTypes;
		}

		export type Result = true;
	}

	export namespace GetBusinessAccountStarBalance {
		export interface Params {
			business_connection_id: string;
		}

		export type Result = APIStarAmount;
	}

	export namespace TransferBusinessAccountStars {
		export interface Params {
			business_connection_id: string;
			star_count: number;
		}

		export type Result = true;
	}

	export namespace GetBusinessAccountGifts {
		export interface Params {
			business_connection_id: string;
			exclude_unsaved?: boolean;
			exclude_saved?: boolean;
			exclude_unlimited?: boolean;
			exclude_limited_upgradable?: boolean;
			exclude_limited_non_upgradable?: boolean;
			exclude_unique?: boolean;
			exclude_from_blockchain?: boolean;
			sort_by_price?: boolean;
			offset?: string;
			limit?: number;
		}

		export type Result = unknown;
	}

	export namespace GetUserGifts {
		export interface Params {
			user_id: number;
			exclude_unlimited?: boolean;
			exclude_limited_upgradable?: boolean;
			exclude_limited_non_upgradable?: boolean;
			exclude_from_blockchain?: boolean;
			exclude_unique?: boolean;
			sort_by_price?: boolean;
			offset?: string;
			limit?: number;
		}

		export type Result = unknown;
	}

	export namespace GetChatGifts {
		export interface Params {
			chat_id: number | string;
			exclude_unsaved?: boolean;
			exclude_saved?: boolean;
			exclude_unlimited?: boolean;
			exclude_limited_upgradable?: boolean;
			exclude_limited_non_upgradable?: boolean;
			exclude_from_blockchain?: boolean;
			exclude_unique?: boolean;
			sort_by_price?: boolean;
			offset?: string;
			limit?: number;
		}

		export type Result = unknown;
	}

	export namespace ConvertGiftToStars {
		export interface Params {
			business_connection_id: string;
			owned_gift_id: string;
		}

		export type Result = true;
	}

	export namespace UpgradeGift {
		export interface Params {
			business_connection_id: string;
			owned_gift_id: string;
			keep_original_details?: boolean;
			star_count?: number;
		}

		export type Result = true;
	}

	export namespace TransferGift {
		export interface Params {
			business_connection_id: string;
			owned_gift_id: string;
			new_owner_chat_id: number;
			star_count?: number;
		}

		export type Result = true;
	}

	export namespace PostStory {
		export interface Params {
			business_connection_id: string;
			content: unknown;
			active_period: number;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			areas?: unknown[];
			post_to_chat_page?: boolean;
			protect_content?: boolean;
		}

		export type Result = APIStory;
	}

	export namespace RepostStory {
		export interface Params {
			business_connection_id: string;
			from_chat_id: number;
			from_story_id: number;
			active_period: number;
			post_to_chat_page?: boolean;
			protect_content?: boolean;
		}

		export type Result = APIStory;
	}

	export namespace EditStory {
		export interface Params {
			business_connection_id: string;
			story_id: number;
			content: unknown;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			areas?: unknown[];
		}

		export type Result = APIStory;
	}

	export namespace DeleteStory {
		export interface Params {
			business_connection_id: string;
			story_id: number;
		}

		export type Result = true;
	}

	export namespace AnswerWebAppQuery {
		export interface Params {
			web_app_query_id: string;
			result: unknown;
		}

		export type Result = unknown;
	}

	export namespace SavePreparedInlineMessage {
		export interface Params {
			user_id: number;
			result: unknown;
			allow_user_chats?: boolean;
			allow_bot_chats?: boolean;
			allow_group_chats?: boolean;
			allow_channel_chats?: boolean;
		}

		export type Result = unknown;
	}

	export namespace SavePreparedKeyboardButton {
		export interface Params {
			user_id: number;
			button: APIKeyboardButton;
		}

		export type Result = unknown;
	}

	export namespace EditMessageText {
		export interface Params {
			business_connection_id?: string;
			chat_id?: number | string;
			message_id?: number;
			inline_message_id?: string;
			text?: string;
			parse_mode?: string;
			entities?: APIMessageEntity[];
			link_preview_options?: APILinkPreviewOptions;
			rich_message?: unknown;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage | true;
	}

	export namespace EditMessageCaption {
		export interface Params {
			business_connection_id?: string;
			chat_id?: number | string;
			message_id?: number;
			inline_message_id?: string;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			show_caption_above_media?: boolean;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage | true;
	}

	export namespace EditMessageMedia {
		export interface Params {
			business_connection_id?: string;
			chat_id?: number | string;
			message_id?: number;
			inline_message_id?: string;
			media: unknown;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage | true;
	}

	export namespace EditMessageLiveLocation {
		export interface Params {
			business_connection_id?: string;
			chat_id?: number | string;
			message_id?: number;
			inline_message_id?: string;
			latitude: number;
			longitude: number;
			live_period?: number;
			horizontal_accuracy?: number;
			heading?: number;
			proximity_alert_radius?: number;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage | true;
	}

	export namespace StopMessageLiveLocation {
		export interface Params {
			business_connection_id?: string;
			chat_id?: number | string;
			message_id?: number;
			inline_message_id?: string;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage | true;
	}

	export namespace EditMessageChecklist {
		export interface Params {
			business_connection_id: string;
			chat_id: number | string;
			message_id: number;
			checklist: unknown;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage;
	}

	export namespace EditMessageReplyMarkup {
		export interface Params {
			business_connection_id?: string;
			chat_id?: number | string;
			message_id?: number;
			inline_message_id?: string;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage | true;
	}

	export namespace StopPoll {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_id: number;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIPoll;
	}

	export namespace EditEphemeralMessageText {
		export interface Params {
			chat_id: number | string;
			receiver_user_id: number;
			ephemeral_message_id: number;
			text?: string;
			parse_mode?: string;
			entities?: APIMessageEntity[];
			rich_message?: unknown;
			link_preview_options?: APILinkPreviewOptions;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = true;
	}

	export namespace EditEphemeralMessageMedia {
		export interface Params {
			chat_id: number | string;
			receiver_user_id: number;
			ephemeral_message_id: number;
			media: unknown;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = true;
	}

	export namespace EditEphemeralMessageCaption {
		export interface Params {
			chat_id: number | string;
			receiver_user_id: number;
			ephemeral_message_id: number;
			caption?: string;
			parse_mode?: string;
			caption_entities?: APIMessageEntity[];
			show_caption_above_media?: boolean;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = true;
	}

	export namespace EditEphemeralMessageReplyMarkup {
		export interface Params {
			chat_id: number | string;
			receiver_user_id: number;
			ephemeral_message_id: number;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = true;
	}

	export namespace ApproveSuggestedPost {
		export interface Params {
			chat_id: number;
			message_id: number;
			send_date?: number;
		}

		export type Result = true;
	}

	export namespace DeclineSuggestedPost {
		export interface Params {
			chat_id: number;
			message_id: number;
			comment?: string;
		}

		export type Result = true;
	}

	export namespace DeleteMessage {
		export interface Params {
			chat_id: number | string;
			message_id: number;
		}

		export type Result = true;
	}

	export namespace DeleteMessages {
		export interface Params {
			chat_id: number | string;
			message_ids: number[];
		}

		export type Result = true;
	}

	export namespace DeleteEphemeralMessage {
		export interface Params {
			chat_id: number | string;
			receiver_user_id: number;
			ephemeral_message_id: number;
		}

		export type Result = true;
	}

	export namespace DeleteMessageReaction {
		export interface Params {
			chat_id: number | string;
			message_id: number;
			user_id?: number;
			actor_chat_id?: number;
		}

		export type Result = true;
	}

	export namespace DeleteAllMessageReactions {
		export interface Params {
			chat_id: number | string;
			user_id?: number;
			actor_chat_id?: number;
		}

		export type Result = true;
	}

	export namespace SendSticker {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			sticker: InputFile | string;
			emoji?: string;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace GetStickerSet {
		export interface Params {
			name: string;
		}

		export type Result = unknown;
	}

	export namespace GetCustomEmojiStickers {
		export interface Params {
			custom_emoji_ids: string[];
		}

		export type Result = APISticker[];
	}

	export namespace UploadStickerFile {
		export interface Params {
			user_id: number;
			sticker: InputFile;
			sticker_format: string;
		}

		export type Result = APIFile;
	}

	export namespace CreateNewStickerSet {
		export interface Params {
			user_id: number;
			name: string;
			title: string;
			stickers: unknown[];
			sticker_type?: string;
			needs_repainting?: boolean;
		}

		export type Result = true;
	}

	export namespace AddStickerToSet {
		export interface Params {
			user_id: number;
			name: string;
			sticker: unknown;
		}

		export type Result = true;
	}

	export namespace SetStickerPositionInSet {
		export interface Params {
			sticker: string;
			position: number;
		}

		export type Result = true;
	}

	export namespace DeleteStickerFromSet {
		export interface Params {
			sticker: string;
		}

		export type Result = true;
	}

	export namespace ReplaceStickerInSet {
		export interface Params {
			user_id: number;
			name: string;
			old_sticker: string;
			sticker: unknown;
		}

		export type Result = true;
	}

	export namespace SetStickerEmojiList {
		export interface Params {
			sticker: string;
			emoji_list: string[];
		}

		export type Result = true;
	}

	export namespace SetStickerKeywords {
		export interface Params {
			sticker: string;
			keywords?: string[];
		}

		export type Result = true;
	}

	export namespace SetStickerMaskPosition {
		export interface Params {
			sticker: string;
			mask_position?: APIMaskPosition;
		}

		export type Result = true;
	}

	export namespace SetStickerSetTitle {
		export interface Params {
			name: string;
			title: string;
		}

		export type Result = true;
	}

	export namespace SetStickerSetThumbnail {
		export interface Params {
			name: string;
			user_id: number;
			thumbnail?: InputFile | string;
			format: string;
		}

		export type Result = true;
	}

	export namespace SetCustomEmojiStickerSetThumbnail {
		export interface Params {
			name: string;
			custom_emoji_id?: string;
		}

		export type Result = true;
	}

	export namespace DeleteStickerSet {
		export interface Params {
			name: string;
		}

		export type Result = true;
	}

	export namespace SendRichMessage {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			ephemeral_message_parameters?: APIEphemeralMessageParameters;
			rich_message: unknown;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup | APIReplyKeyboardMarkup | APIReplyKeyboardRemove | APIForceReply;
		}

		export type Result = APIMessage;
	}

	export namespace SendRichMessageDraft {
		export interface Params {
			chat_id: number;
			message_thread_id?: number;
			draft_id: number;
			rich_message: unknown;
			can_stop?: boolean;
			keep_on_stop?: boolean;
		}

		export type Result = true;
	}

	export namespace AnswerInlineQuery {
		export interface Params {
			inline_query_id: string;
			results: unknown[];
			cache_time?: number;
			is_personal?: boolean;
			next_offset?: string;
			button?: unknown;
		}

		export type Result = true;
	}

	export namespace SendInvoice {
		export interface Params {
			chat_id: number | string;
			message_thread_id?: number;
			direct_messages_topic_id?: number;
			title: string;
			description: string;
			payload: string;
			provider_token?: string;
			currency: string;
			prices: unknown[];
			max_tip_amount?: number;
			suggested_tip_amounts?: number[];
			start_parameter?: string;
			provider_data?: string;
			photo_url?: string;
			photo_size?: number;
			photo_width?: number;
			photo_height?: number;
			need_name?: boolean;
			need_phone_number?: boolean;
			need_email?: boolean;
			need_shipping_address?: boolean;
			send_phone_number_to_provider?: boolean;
			send_email_to_provider?: boolean;
			is_flexible?: boolean;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			suggested_post_parameters?: APISuggestedPostParameters;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage;
	}

	export namespace CreateInvoiceLink {
		export interface Params {
			business_connection_id?: string;
			title: string;
			description: string;
			payload: string;
			provider_token?: string;
			currency: string;
			prices: unknown[];
			subscription_period?: number;
			max_tip_amount?: number;
			suggested_tip_amounts?: number[];
			provider_data?: string;
			photo_url?: string;
			photo_size?: number;
			photo_width?: number;
			photo_height?: number;
			need_name?: boolean;
			need_phone_number?: boolean;
			need_email?: boolean;
			need_shipping_address?: boolean;
			send_phone_number_to_provider?: boolean;
			send_email_to_provider?: boolean;
			is_flexible?: boolean;
		}

		export type Result = string;
	}

	export namespace AnswerShippingQuery {
		export interface Params {
			shipping_query_id: string;
			ok: boolean;
			shipping_options?: unknown[];
			error_message?: string;
		}

		export type Result = true;
	}

	export namespace AnswerPreCheckoutQuery {
		export interface Params {
			pre_checkout_query_id: string;
			ok: boolean;
			error_message?: string;
		}

		export type Result = true;
	}

	export namespace GetMyStarBalance {
		export type Result = APIStarAmount;
	}

	export namespace GetStarTransactions {
		export interface Params {
			offset?: number;
			limit?: number;
		}

		export type Result = unknown;
	}

	export namespace RefundStarPayment {
		export interface Params {
			user_id: number;
			telegram_payment_charge_id: string;
		}

		export type Result = true;
	}

	export namespace EditUserStarSubscription {
		export interface Params {
			user_id: number;
			telegram_payment_charge_id: string;
			is_canceled: boolean;
		}

		export type Result = true;
	}

	export namespace SetPassportDataErrors {
		export interface Params {
			user_id: number;
			errors: unknown[];
		}

		export type Result = true;
	}

	export namespace SendGame {
		export interface Params {
			business_connection_id?: string;
			chat_id: number | string;
			message_thread_id?: number;
			game_short_name: string;
			disable_notification?: boolean;
			protect_content?: boolean;
			allow_paid_broadcast?: boolean;
			message_effect_id?: string;
			reply_parameters?: APIReplyParameters;
			reply_markup?: APIInlineKeyboardMarkup;
		}

		export type Result = APIMessage;
	}

	export namespace SetGameScore {
		export interface Params {
			user_id: number;
			score: number;
			force?: boolean;
			disable_edit_message?: boolean;
			chat_id?: number;
			message_id?: number;
			inline_message_id?: string;
		}

		export type Result = APIMessage | true;
	}

	export namespace GetGameHighScores {
		export interface Params {
			user_id: number;
			chat_id?: number;
			message_id?: number;
			inline_message_id?: string;
		}

		export type Result = unknown[];
	}
}
