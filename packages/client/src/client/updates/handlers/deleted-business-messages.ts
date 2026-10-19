import { APIDeletedBusinessMessagesUpdate } from '@telescript/api-types';
import { createStructure } from '@telescript/structures';
import { Client, ClientEvent } from '../../Client.js';

export function deleted_business_messages(client: Client, update: APIDeletedBusinessMessagesUpdate) {
	const deleted = createStructure(client, 'BusinessMessagesDeleted', update.deleted_business_messages);
	return [ClientEvent.DeletedBusinessMessages, [deleted]] as const;
}
