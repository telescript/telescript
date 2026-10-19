import { createStructure, defaultOwner, registerStructures, type StructureOwner } from '../../../registry.js';
import { BaseBackgroundFill } from './BaseBackgroundFill.js';
import { FreeformGradientBackgroundFill } from './FreeformGradientBackgroundFill.js';
import { GradientBackgroundFill } from './GradientBackgroundFill.js';
import { SolidBackgroundFill } from './SolidBackgroundFill.js';
import { APIBackgroundType, BackgroundTypeType } from '@telescript/api-types';
import { BaseBackgroundType } from './BaseBackgroundType.js';
import { FillBackgroundType } from './FillBackgroundType.js';
import { WallpaperBackgroundType } from './WallpaperBackgroundType.js';
import { PatternBackgroundType } from './PatternBackgroundType.js';
import { ChatThemeBackgroundType } from './ChatThemeBackgroundType.js';
import type { BackgroundType } from './types.js';

export * from './BaseBackgroundFill.js';
export * from './SolidBackgroundFill.js';
export * from './GradientBackgroundFill.js';
export * from './FreeformGradientBackgroundFill.js';
export * from './BaseBackgroundType.js';
export * from './FillBackgroundType.js';
export * from './WallpaperBackgroundType.js';
export * from './PatternBackgroundType.js';
export * from './ChatThemeBackgroundType.js';
export * from './createBackgroundFill.js';
export type { BackgroundFill, BackgroundType } from './types.js';

export function createBackgroundType(data: APIBackgroundType, owner: StructureOwner = defaultOwner): BackgroundType {
	switch (data.type) {
		case BackgroundTypeType.Fill:
			return createStructure(owner, 'FillBackgroundType', data);
		case BackgroundTypeType.Wallpaper:
			return createStructure(owner, 'WallpaperBackgroundType', data);
		case BackgroundTypeType.Pattern:
			return createStructure(owner, 'PatternBackgroundType', data);
		case BackgroundTypeType.ChatTheme:
			return createStructure(owner, 'ChatThemeBackgroundType', data);
		default:
			return createStructure(owner, 'BaseBackgroundType', data);
	}
}

declare module '../../../registry.js' {
	interface DefaultTypes {
		BaseBackgroundFill: BaseBackgroundFill<never>;
		BaseBackgroundType: BaseBackgroundType<never>;
		ChatThemeBackgroundType: ChatThemeBackgroundType;
		FillBackgroundType: FillBackgroundType;
		FreeformGradientBackgroundFill: FreeformGradientBackgroundFill;
		GradientBackgroundFill: GradientBackgroundFill;
		PatternBackgroundType: PatternBackgroundType;
		SolidBackgroundFill: SolidBackgroundFill;
		WallpaperBackgroundType: WallpaperBackgroundType;
	}
}

registerStructures({
	BaseBackgroundFill,
	BaseBackgroundType,
	ChatThemeBackgroundType,
	FillBackgroundType,
	FreeformGradientBackgroundFill,
	GradientBackgroundFill,
	PatternBackgroundType,
	SolidBackgroundFill,
	WallpaperBackgroundType,
});
