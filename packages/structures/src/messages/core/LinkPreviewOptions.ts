import { APILinkPreviewOptions } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class LinkPreviewOptions extends Structure<APILinkPreviewOptions> {
	public get isDisabled() {
		return this[Structure.DataProperty].is_disabled ?? null;
	}

	public get url() {
		return this[Structure.DataProperty].url ?? null;
	}

	public get preferSmallMedia() {
		return this[Structure.DataProperty].prefer_small_media ?? null;
	}

	public get preferLargeMedia() {
		return this[Structure.DataProperty].prefer_large_media ?? null;
	}

	public get showAboveText() {
		return this[Structure.DataProperty].show_above_text ?? null;
	}
}
