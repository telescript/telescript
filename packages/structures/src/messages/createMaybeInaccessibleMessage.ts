import { APIInaccessibleMessage, APIMaybeInaccessibleMessage } from '@telescript/api-types';
import { createMessage, type Message } from './createMessage.js';
import { createStructure, defaultOwner, type StructureOwner, type Resolve } from '../registry.js';

export type MaybeInaccessibleMessage = Message | Resolve<'InaccessibleMessage'>;

function isInaccessibleMessage(data: APIMaybeInaccessibleMessage): data is APIInaccessibleMessage {
	return data.date === 0;
}

export function createMaybeInaccessibleMessage(
	data: APIMaybeInaccessibleMessage,
	owner: StructureOwner = defaultOwner,
): MaybeInaccessibleMessage {
	if (isInaccessibleMessage(data)) {
		return createStructure(owner, 'InaccessibleMessage', data);
	}

	return createMessage(data, owner);
}
