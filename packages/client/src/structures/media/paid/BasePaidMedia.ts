import { APIPaidMedia, PaidMediaType } from '@telescript/api-types';
import { BasePaidMedia as ParentBasePaidMedia } from '@telescript/structures';
import { Client } from '../../../client/Client.js';

export interface BasePaidMedia<
	Type extends PaidMediaType = PaidMediaType,
	Data extends APIPaidMedia.FromType<Type> = APIPaidMedia.FromType<Type>,
> {}

export class BasePaidMedia<
	Type extends PaidMediaType = PaidMediaType,
	Data extends APIPaidMedia.FromType<Type> = APIPaidMedia.FromType<Type>,
> extends ParentBasePaidMedia<Type, Data> {
	public constructor(
		public client: Client,
		data: Data,
	) {
		super(data);
	}
}
