import { registerStructures } from '../../registry.js';
import { Birthdate } from './Birthdate.js';
import { BusinessIntro } from './BusinessIntro.js';
import { BusinessLocation } from './BusinessLocation.js';
import { BusinessOpeningHours } from './BusinessOpeningHours.js';
import { BusinessOpeningHoursInterval } from './BusinessOpeningHoursInterval.js';
import { ChatLocation } from './ChatLocation.js';
import { ChatPermissions } from './ChatPermissions.js';
import { ChatPhoto } from './ChatPhoto.js';
import { UserRating } from './UserRating.js';
export * from './Birthdate.js';
export * from './BusinessIntro.js';
export * from './BusinessLocation.js';
export * from './BusinessOpeningHours.js';
export * from './BusinessOpeningHoursInterval.js';
export * from './ChatFullInfo.js';
export * from './ChatLocation.js';
export * from './ChatPermissions.js';
export * from './ChatPhoto.js';
export * from './UserRating.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		Birthdate: Birthdate;
		BusinessIntro: BusinessIntro;
		BusinessLocation: BusinessLocation;
		BusinessOpeningHours: BusinessOpeningHours;
		BusinessOpeningHoursInterval: BusinessOpeningHoursInterval;
		ChatLocation: ChatLocation;
		ChatPermissions: ChatPermissions;
		ChatPhoto: ChatPhoto;
		UserRating: UserRating;
	}
}

registerStructures({
	Birthdate,
	BusinessIntro,
	BusinessLocation,
	BusinessOpeningHours,
	BusinessOpeningHoursInterval,
	ChatLocation,
	ChatPermissions,
	ChatPhoto,
	UserRating,
});
