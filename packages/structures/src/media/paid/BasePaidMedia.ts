import { APIPaidMedia, PaidMediaType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import type { Resolve } from '../../registry.js';

export class BasePaidMedia<
	Type extends PaidMediaType,
	Data extends APIPaidMedia.FromType<Type> = APIPaidMedia.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isLivePhoto(): this is Resolve<'LivePhotoPaidMedia'> {
		return false;
	}

	public isPhoto(): this is Resolve<'PhotoPaidMedia'> {
		return false;
	}

	public isPreview(): this is Resolve<'PreviewPaidMedia'> {
		return false;
	}

	public isVideo(): this is Resolve<'VideoPaidMedia'> {
		return false;
	}
}
