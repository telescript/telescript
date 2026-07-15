import { MediaBase } from '@telescript/api-types';
import { BaseMedia as ParentBaseMedia } from '@telescript/structures';
import { Client } from '../../client/index.js';

export interface BaseMedia<Data extends MediaBase = MediaBase> {}

export class BaseMedia<Data extends MediaBase = MediaBase> extends ParentBaseMedia<Data> {
	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}
}
