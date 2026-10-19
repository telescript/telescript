import { registerStructures } from '../registry.js';
import { Location } from './Location.js';
import { LocationAddress } from './LocationAddress.js';
export * from './Location.js';
export * from './LocationAddress.js';

declare module '../registry.js' {
	interface DefaultTypes {
		Location: Location;
		LocationAddress: LocationAddress;
	}
}

registerStructures({ Location, LocationAddress });
