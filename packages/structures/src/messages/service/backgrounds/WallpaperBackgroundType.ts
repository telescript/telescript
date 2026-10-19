import { createStructure, type Resolve } from '../../../registry.js';
import { APIBackgroundTypeWallpaper, BackgroundTypeType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseBackgroundType } from './BaseBackgroundType.js';

export class WallpaperBackgroundType extends BaseBackgroundType<
	BackgroundTypeType.Wallpaper,
	APIBackgroundTypeWallpaper
> {
	public isWallpaper(): this is Resolve<'WallpaperBackgroundType'> {
		return true;
	}

	public get document(): Resolve<'Document'> {
		return createStructure(this[Structure.OwnerProperty], 'Document', this[Structure.DataProperty].document);
	}

	public get darkThemeDimming() {
		return this[Structure.DataProperty].dark_theme_dimming;
	}

	public get isBlurred() {
		return this[Structure.DataProperty].is_blurred ?? false;
	}

	public get isMoving() {
		return this[Structure.DataProperty].is_moving ?? false;
	}
}
