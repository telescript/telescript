import { APIWriteAccessAllowed } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class WriteAccessAllowed extends Structure<APIWriteAccessAllowed> {
	public get fromRequest() {
		return this[Structure.DataProperty].from_request ?? false;
	}

	public get webAppName() {
		return this[Structure.DataProperty].web_app_name ?? null;
	}

	public get fromAttachmentMenu() {
		return this[Structure.DataProperty].from_attachment_menu ?? false;
	}
}
