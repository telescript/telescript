import { Structure } from '../Structure.js';
import { MessageType } from '@telescript/api-types';
import { BaseMessage } from './BaseMessage.js';
import { createStructure, type Resolve } from '../registry.js';

export class ProximityAlertMessage extends BaseMessage<MessageType.ProximityAlert> {
	public get proximityAlertTriggered(): Resolve<'ProximityAlertTriggered'> {
		return createStructure(
			this[Structure.OwnerProperty],
			'ProximityAlertTriggered',
			this[Structure.DataProperty].proximity_alert_triggered,
		);
	}

	public get type(): MessageType.ProximityAlert {
		return MessageType.ProximityAlert;
	}

	public isProximityAlert(): this is Resolve<'ProximityAlertMessage'> {
		return true;
	}
}
