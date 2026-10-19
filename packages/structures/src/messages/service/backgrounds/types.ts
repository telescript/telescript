import type { Resolve } from '../../../registry.js';

export type BackgroundFill =
	| Resolve<'BaseBackgroundFill'>
	| Resolve<'SolidBackgroundFill'>
	| Resolve<'GradientBackgroundFill'>
	| Resolve<'FreeformGradientBackgroundFill'>;

export type BackgroundType =
	| Resolve<'BaseBackgroundType'>
	| Resolve<'FillBackgroundType'>
	| Resolve<'WallpaperBackgroundType'>
	| Resolve<'PatternBackgroundType'>
	| Resolve<'ChatThemeBackgroundType'>;
