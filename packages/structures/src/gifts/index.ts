import { registerStructures } from '../registry.js';
import { AcceptedGiftTypes } from './AcceptedGiftTypes.js';
import { Gift } from './Gift.js';
import { GiftBackground } from './GiftBackground.js';
import { GiftInfo } from './GiftInfo.js';
import { UniqueGift } from './UniqueGift.js';
import { UniqueGiftBackdrop } from './UniqueGiftBackdrop.js';
import { UniqueGiftBackdropColors } from './UniqueGiftBackdropColors.js';
import { UniqueGiftColors } from './UniqueGiftColors.js';
import { UniqueGiftInfo } from './UniqueGiftInfo.js';
import { UniqueGiftModel } from './UniqueGiftModel.js';
import { UniqueGiftSymbol } from './UniqueGiftSymbol.js';
export * from './AcceptedGiftTypes.js';
export * from './Gift.js';
export * from './GiftBackground.js';
export * from './GiftInfo.js';
export * from './UniqueGift.js';
export * from './UniqueGiftBackdrop.js';
export * from './UniqueGiftBackdropColors.js';
export * from './UniqueGiftColors.js';
export * from './UniqueGiftInfo.js';
export * from './UniqueGiftModel.js';
export * from './UniqueGiftSymbol.js';
export * from './owned-gifts/index.js';

declare module '../registry.js' {
	interface DefaultTypes {
		AcceptedGiftTypes: AcceptedGiftTypes;
		Gift: Gift;
		GiftBackground: GiftBackground;
		GiftInfo: GiftInfo;
		UniqueGift: UniqueGift;
		UniqueGiftBackdrop: UniqueGiftBackdrop;
		UniqueGiftBackdropColors: UniqueGiftBackdropColors;
		UniqueGiftColors: UniqueGiftColors;
		UniqueGiftInfo: UniqueGiftInfo;
		UniqueGiftModel: UniqueGiftModel;
		UniqueGiftSymbol: UniqueGiftSymbol;
	}
}

registerStructures({
	AcceptedGiftTypes,
	Gift,
	GiftBackground,
	GiftInfo,
	UniqueGift,
	UniqueGiftBackdrop,
	UniqueGiftBackdropColors,
	UniqueGiftColors,
	UniqueGiftInfo,
	UniqueGiftModel,
	UniqueGiftSymbol,
});
