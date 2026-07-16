import { APIMethod } from '@telescript/api-types';
import type { Requester } from '@telescript/spec';

export class API {
	public constructor(public requester: Requester) {}

	public async getUpdates(params: APIMethod.GetUpdates.Params) {
		return (await this.requester.request(APIMethod.GetUpdates, params)) as APIMethod.GetUpdates.Result;
	}

	public async getMe() {
		return (await this.requester.request(APIMethod.GetMe)) as APIMethod.GetMe.Result;
	}

	public async logOut() {
		return (await this.requester.request(APIMethod.LogOut)) as APIMethod.LogOut.Result;
	}

	public async close() {
		return (await this.requester.request(APIMethod.Close)) as APIMethod.Close.Result;
	}

	public async sendMessage(params: APIMethod.SendMessage.Params) {
		return (await this.requester.request(APIMethod.SendMessage, params)) as APIMethod.SendMessage.Result;
	}

	public async forwardMessage(params: APIMethod.ForwardMessage.Params) {
		return (await this.requester.request(APIMethod.ForwardMessage, params)) as APIMethod.ForwardMessage.Result;
	}

	public async forwardMessages(params: APIMethod.ForwardMessages.Params) {
		return (await this.requester.request(APIMethod.ForwardMessages, params)) as APIMethod.ForwardMessages.Result;
	}

	public async copyMessage(params: APIMethod.CopyMessage.Params) {
		return (await this.requester.request(APIMethod.CopyMessage, params)) as APIMethod.CopyMessage.Result;
	}

	public async copyMessages(params: APIMethod.CopyMessages.Params) {
		return (await this.requester.request(APIMethod.CopyMessages, params)) as APIMethod.CopyMessages.Result;
	}

	public async sendPhoto(params: APIMethod.SendPhoto.Params) {
		return (await this.requester.request(APIMethod.SendPhoto, params, {
			asFormData: params.photo instanceof Blob,
		})) as APIMethod.SendPhoto.Result;
	}

	public async sendAnimation(params: APIMethod.SendAnimation.Params) {
		return (await this.requester.request(APIMethod.SendAnimation, params, {
			asFormData: params.animation instanceof Blob,
		})) as APIMethod.SendAnimation.Result;
	}

	public async sendAudio(params: APIMethod.SendAudio.Params) {
		return (await this.requester.request(APIMethod.SendAudio, params, {
			asFormData: params.audio instanceof Blob,
		})) as APIMethod.SendAudio.Result;
	}

	public async sendDocument(params: APIMethod.SendDocument.Params) {
		return (await this.requester.request(APIMethod.SendDocument, params, {
			asFormData: params.document instanceof Blob,
		})) as APIMethod.SendDocument.Result;
	}

	public async sendVideo(params: APIMethod.SendVideo.Params) {
		return (await this.requester.request(APIMethod.SendVideo, params, {
			asFormData: params.video instanceof Blob,
		})) as APIMethod.SendVideo.Result;
	}

	public async sendVideoNote(params: APIMethod.SendVideoNote.Params) {
		return (await this.requester.request(APIMethod.SendVideoNote, params, {
			asFormData: params.video_note instanceof Blob,
		})) as APIMethod.SendVideoNote.Result;
	}

	public async sendVoice(params: APIMethod.SendVoice.Params) {
		return (await this.requester.request(APIMethod.SendVoice, params, {
			asFormData: params.voice instanceof Blob,
		})) as APIMethod.SendVoice.Result;
	}

	public async sendSticker(params: APIMethod.SendSticker.Params) {
		return (await this.requester.request(APIMethod.SendSticker, params, {
			asFormData: params.sticker instanceof Blob,
		})) as APIMethod.SendSticker.Result;
	}

	public async sendLivePhoto(params: APIMethod.SendLivePhoto.Params) {
		return (await this.requester.request(APIMethod.SendLivePhoto, params, {
			asFormData: params.live_photo instanceof Blob,
		})) as APIMethod.SendLivePhoto.Result;
	}

	public async sendMediaGroup(params: APIMethod.SendMediaGroup.Params) {
		return (await this.requester.request(APIMethod.SendMediaGroup, params)) as APIMethod.SendMediaGroup.Result;
	}

	public async sendLocation(params: APIMethod.SendLocation.Params) {
		return (await this.requester.request(APIMethod.SendLocation, params)) as APIMethod.SendLocation.Result;
	}

	public async sendVenue(params: APIMethod.SendVenue.Params) {
		return (await this.requester.request(APIMethod.SendVenue, params)) as APIMethod.SendVenue.Result;
	}

	public async sendContact(params: APIMethod.SendContact.Params) {
		return (await this.requester.request(APIMethod.SendContact, params)) as APIMethod.SendContact.Result;
	}

	public async sendPoll(params: APIMethod.SendPoll.Params) {
		return (await this.requester.request(APIMethod.SendPoll, params)) as APIMethod.SendPoll.Result;
	}

	public async sendDice(params: APIMethod.SendDice.Params) {
		return (await this.requester.request(APIMethod.SendDice, params)) as APIMethod.SendDice.Result;
	}

	public async editMessageText(params: APIMethod.EditMessageText.Params) {
		return (await this.requester.request(APIMethod.EditMessageText, params)) as APIMethod.EditMessageText.Result;
	}

	public async editMessageCaption(params: APIMethod.EditMessageCaption.Params) {
		return (await this.requester.request(APIMethod.EditMessageCaption, params)) as APIMethod.EditMessageCaption.Result;
	}

	public async editMessageMedia(params: APIMethod.EditMessageMedia.Params) {
		return (await this.requester.request(APIMethod.EditMessageMedia, params)) as APIMethod.EditMessageMedia.Result;
	}

	public async editMessageReplyMarkup(params: APIMethod.EditMessageReplyMarkup.Params) {
		return (await this.requester.request(
			APIMethod.EditMessageReplyMarkup,
			params,
		)) as APIMethod.EditMessageReplyMarkup.Result;
	}

	public async stopPoll(params: APIMethod.StopPoll.Params) {
		return (await this.requester.request(APIMethod.StopPoll, params)) as APIMethod.StopPoll.Result;
	}

	public async deleteMessage(params: APIMethod.DeleteMessage.Params) {
		return (await this.requester.request(APIMethod.DeleteMessage, params)) as APIMethod.DeleteMessage.Result;
	}

	public async deleteMessages(params: APIMethod.DeleteMessages.Params) {
		return (await this.requester.request(APIMethod.DeleteMessages, params)) as APIMethod.DeleteMessages.Result;
	}
}
