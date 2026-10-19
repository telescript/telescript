import { APIRichBlock, RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import type { Resolve } from '../../../registry.js';

export class BaseRichBlock<
	Type extends RichBlockType,
	Data extends APIRichBlock.FromType<Type> = APIRichBlock.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isParagraph(): this is Resolve<'ParagraphRichBlock'> {
		return false;
	}

	public isSectionHeading(): this is Resolve<'SectionHeadingRichBlock'> {
		return false;
	}

	public isPreformatted(): this is Resolve<'PreformattedRichBlock'> {
		return false;
	}

	public isFooter(): this is Resolve<'FooterRichBlock'> {
		return false;
	}

	public isDivider(): this is Resolve<'DividerRichBlock'> {
		return false;
	}

	public isMathematicalExpression(): this is Resolve<'MathematicalExpressionRichBlock'> {
		return false;
	}

	public isAnchor(): this is Resolve<'AnchorRichBlock'> {
		return false;
	}

	public isList(): this is Resolve<'ListRichBlock'> {
		return false;
	}

	public isBlockQuotation(): this is Resolve<'BlockQuotationRichBlock'> {
		return false;
	}

	public isExpandableBlockQuotation(): this is Resolve<'ExpandableBlockQuotationRichBlock'> {
		return false;
	}

	public isPullQuotation(): this is Resolve<'PullQuotationRichBlock'> {
		return false;
	}

	public isCollage(): this is Resolve<'CollageRichBlock'> {
		return false;
	}

	public isSlideshow(): this is Resolve<'SlideshowRichBlock'> {
		return false;
	}

	public isTable(): this is Resolve<'TableRichBlock'> {
		return false;
	}

	public isDetails(): this is Resolve<'DetailsRichBlock'> {
		return false;
	}

	public isMap(): this is Resolve<'MapRichBlock'> {
		return false;
	}

	public isButtons(): this is Resolve<'ButtonsRichBlock'> {
		return false;
	}

	public isAnimation(): this is Resolve<'AnimationRichBlock'> {
		return false;
	}

	public isAudio(): this is Resolve<'AudioRichBlock'> {
		return false;
	}

	public isDocument(): this is Resolve<'DocumentRichBlock'> {
		return false;
	}

	public isPhoto(): this is Resolve<'PhotoRichBlock'> {
		return false;
	}

	public isVideo(): this is Resolve<'VideoRichBlock'> {
		return false;
	}

	public isVoiceNote(): this is Resolve<'VoiceNoteRichBlock'> {
		return false;
	}

	public isThinking(): this is Resolve<'ThinkingRichBlock'> {
		return false;
	}
}
