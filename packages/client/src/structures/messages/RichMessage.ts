import { RichMessage as ParentRichMessage } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIRichMessage } from '@telescript/api-types';

export interface RichMessage extends ParentRichMessage {}

export class RichMessage extends ParentRichMessage {
	public constructor(
		public client: Client,
		data: APIRichMessage,
	) {
		super(data);
	}
}
