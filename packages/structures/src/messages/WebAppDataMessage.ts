import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class WebAppDataMessage extends BaseMessage<MessageType.WebAppData> {
	public get webAppData(): Resolve<'WebAppData'> {
		return createStructure(this[Structure.OwnerProperty], 'WebAppData', this[Structure.DataProperty].web_app_data);
	}

	public get type(): MessageType.WebAppData {
		return MessageType.WebAppData;
	}

	public isWebAppData(): this is Resolve<'WebAppDataMessage'> {
		return true;
	}
}
