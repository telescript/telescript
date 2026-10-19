import { registerStructures } from '../../registry.js';
import { SuggestedPostApprovalFailed } from './SuggestedPostApprovalFailed.js';
import { SuggestedPostApproved } from './SuggestedPostApproved.js';
import { SuggestedPostDeclined } from './SuggestedPostDeclined.js';
import { SuggestedPostInfo } from './SuggestedPostInfo.js';
import { SuggestedPostPaid } from './SuggestedPostPaid.js';
import { SuggestedPostPrice } from './SuggestedPostPrice.js';
import { SuggestedPostRefunded } from './SuggestedPostRefunded.js';
export * from './SuggestedPostApprovalFailed.js';
export * from './SuggestedPostApproved.js';
export * from './SuggestedPostDeclined.js';
export * from './SuggestedPostInfo.js';
export * from './SuggestedPostPaid.js';
export * from './SuggestedPostPrice.js';
export * from './SuggestedPostRefunded.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		SuggestedPostApprovalFailed: SuggestedPostApprovalFailed;
		SuggestedPostApproved: SuggestedPostApproved;
		SuggestedPostDeclined: SuggestedPostDeclined;
		SuggestedPostInfo: SuggestedPostInfo;
		SuggestedPostPaid: SuggestedPostPaid;
		SuggestedPostPrice: SuggestedPostPrice;
		SuggestedPostRefunded: SuggestedPostRefunded;
	}
}

registerStructures({
	SuggestedPostApprovalFailed,
	SuggestedPostApproved,
	SuggestedPostDeclined,
	SuggestedPostInfo,
	SuggestedPostPaid,
	SuggestedPostPrice,
	SuggestedPostRefunded,
});
