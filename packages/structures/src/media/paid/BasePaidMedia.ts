import { APIPaidMedia, PaidMediaType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { LivePhotoPaidMedia } from './LivePhotoPaidMedia.js';
import { PhotoPaidMedia } from './PhotoPaidMedia.js';
import { PreviewPaidMedia } from './PreviewPaidMedia.js';
import { VideoPaidMedia } from './VideoPaidMedia.js';

export class BasePaidMedia<
	Type extends PaidMediaType,
	Data extends APIPaidMedia.FromType<Type> = APIPaidMedia.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isLivePhoto(): this is LivePhotoPaidMedia {
		return false;
	}

	public isPhoto(): this is PhotoPaidMedia {
		return false;
	}

	public isPreview(): this is PreviewPaidMedia {
		return false;
	}

	public isVideo(): this is VideoPaidMedia {
		return false;
	}
}
