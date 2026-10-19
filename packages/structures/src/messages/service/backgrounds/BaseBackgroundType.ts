import type { Resolve } from '../../../registry.js';
import { APIBackgroundType, BackgroundTypeType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';

type BackgroundTypeData<Type extends BackgroundTypeType> = Extract<APIBackgroundType, { type: Type }>;

export class BaseBackgroundType<
	Type extends BackgroundTypeType,
	Data extends BackgroundTypeData<Type> = BackgroundTypeData<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isFill(): this is Resolve<'FillBackgroundType'> {
		return false;
	}

	public isWallpaper(): this is Resolve<'WallpaperBackgroundType'> {
		return false;
	}

	public isPattern(): this is Resolve<'PatternBackgroundType'> {
		return false;
	}

	public isChatTheme(): this is Resolve<'ChatThemeBackgroundType'> {
		return false;
	}
}
