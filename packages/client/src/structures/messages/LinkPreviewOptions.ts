import { LinkPreviewOptions as ParentLinkPreviewOptions } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APILinkPreviewOptions } from '@telescript/api-types';

export interface LinkPreviewOptions extends ParentLinkPreviewOptions {}

export class LinkPreviewOptions extends ParentLinkPreviewOptions {
	public constructor(
		public client: Client,
		data: APILinkPreviewOptions,
	) {
		super(data);
	}
}
