import { Dice as ParentDice } from '@telescript/structures';
import { Client } from '../../client/index.js';
import { APIDice } from '@telescript/api-types';

export interface Dice extends ParentDice {}

export class Dice extends ParentDice {
	public constructor(
		public client: Client,
		data: APIDice,
	) {
		super(data);
	}
}
