import { MaskPosition as ParentMaskPosition } from '@telescript/structures';
import { Client } from '../../../client';
import { APIMaskPosition } from '@telescript/api-types';

export class MaskPosition extends ParentMaskPosition {
	public constructor(
		public client: Client,
		data: APIMaskPosition,
	) {
		super(data);
	}
}
