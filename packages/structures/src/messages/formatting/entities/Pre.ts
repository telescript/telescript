import { MessageEntityType } from '@telescript/api-types';
import { BaseMessageEntity } from './BaseMessageEntity.js';
import { Structure } from '../../../Structure.js';
import type { Resolve } from '../../../registry.js';

export class PreMessageEntity extends BaseMessageEntity<MessageEntityType.Pre> {
	public isPre(): this is Resolve<'PreMessageEntity'> {
		return true;
	}

	public get language() {
		return this[Structure.DataProperty].language ?? null;
	}
}
