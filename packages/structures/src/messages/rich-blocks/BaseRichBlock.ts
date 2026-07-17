import { APIRichBlock, RichBlockType } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { ParagraphRichBlock } from './Paragraph.js';
import { SectionHeadingRichBlock } from './SectionHeading.js';
import { PreformattedRichBlock } from './Preformatted.js';
import { FooterRichBlock } from './Footer.js';
import { DividerRichBlock } from './Divider.js';
import { MathematicalExpressionRichBlock } from './MathematicalExpression.js';
import { AnchorRichBlock } from './Anchor.js';
import { ListRichBlock } from './List.js';
import { BlockQuotationRichBlock } from './BlockQuotation.js';
import { PullQuotationRichBlock } from './PullQuotation.js';
import { CollageRichBlock } from './Collage.js';
import { SlideshowRichBlock } from './Slideshow.js';
import { TableRichBlock } from './Table.js';
import { DetailsRichBlock } from './Details.js';
import { MapRichBlock } from './Map.js';
import { AnimationRichBlock } from './Animation.js';
import { AudioRichBlock } from './Audio.js';
import { PhotoRichBlock } from './Photo.js';
import { VideoRichBlock } from './Video.js';
import { VoiceNoteRichBlock } from './VoiceNote.js';
import { ThinkingRichBlock } from './Thinking.js';

export class BaseRichBlock<
	Type extends RichBlockType,
	Data extends APIRichBlock.FromType<Type> = APIRichBlock.FromType<Type>,
> extends Structure<Data> {
	public get type() {
		return this[Structure.DataProperty].type;
	}

	public isParagraph(): this is ParagraphRichBlock {
		return false;
	}

	public isSectionHeading(): this is SectionHeadingRichBlock {
		return false;
	}

	public isPreformatted(): this is PreformattedRichBlock {
		return false;
	}

	public isFooter(): this is FooterRichBlock {
		return false;
	}

	public isDivider(): this is DividerRichBlock {
		return false;
	}

	public isMathematicalExpression(): this is MathematicalExpressionRichBlock {
		return false;
	}

	public isAnchor(): this is AnchorRichBlock {
		return false;
	}

	public isList(): this is ListRichBlock {
		return false;
	}

	public isBlockQuotation(): this is BlockQuotationRichBlock {
		return false;
	}

	public isPullQuotation(): this is PullQuotationRichBlock {
		return false;
	}

	public isCollage(): this is CollageRichBlock {
		return false;
	}

	public isSlideshow(): this is SlideshowRichBlock {
		return false;
	}

	public isTable(): this is TableRichBlock {
		return false;
	}

	public isDetails(): this is DetailsRichBlock {
		return false;
	}

	public isMap(): this is MapRichBlock {
		return false;
	}

	public isAnimation(): this is AnimationRichBlock {
		return false;
	}

	public isAudio(): this is AudioRichBlock {
		return false;
	}

	public isPhoto(): this is PhotoRichBlock {
		return false;
	}

	public isVideo(): this is VideoRichBlock {
		return false;
	}

	public isVoiceNote(): this is VoiceNoteRichBlock {
		return false;
	}

	public isThinking(): this is ThinkingRichBlock {
		return false;
	}
}
