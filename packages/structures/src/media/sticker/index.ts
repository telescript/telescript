import { registerStructures } from '../../registry.js';
import { MaskPosition } from './MaskPosition.js';
import { Sticker } from './Sticker.js';
export * from './MaskPosition.js';
export * from './Sticker.js';
export * from './StickerSet.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		MaskPosition: MaskPosition;
		Sticker: Sticker;
	}
}

registerStructures({ MaskPosition, Sticker });
