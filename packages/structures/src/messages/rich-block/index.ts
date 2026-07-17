import { APIRichBlock, RichBlockType } from '@telescript/api-types';
import { BaseRichBlock } from './BaseRichBlock.js';
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

export * from './BaseRichBlock.js';
export * from './RichBlockListItem.js';
export * from './RichBlockCaption.js';
export * from './RichBlockTableCell.js';
export * from './Paragraph.js';
export * from './SectionHeading.js';
export * from './Preformatted.js';
export * from './Footer.js';
export * from './Divider.js';
export * from './MathematicalExpression.js';
export * from './Anchor.js';
export * from './List.js';
export * from './BlockQuotation.js';
export * from './PullQuotation.js';
export * from './Collage.js';
export * from './Slideshow.js';
export * from './Table.js';
export * from './Details.js';
export * from './Map.js';
export * from './Animation.js';
export * from './Audio.js';
export * from './Photo.js';
export * from './Video.js';
export * from './VoiceNote.js';
export * from './Thinking.js';

export type RichBlock =
	| BaseRichBlock<never>
	| ParagraphRichBlock
	| SectionHeadingRichBlock
	| PreformattedRichBlock
	| FooterRichBlock
	| DividerRichBlock
	| MathematicalExpressionRichBlock
	| AnchorRichBlock
	| ListRichBlock
	| BlockQuotationRichBlock
	| PullQuotationRichBlock
	| CollageRichBlock
	| SlideshowRichBlock
	| TableRichBlock
	| DetailsRichBlock
	| MapRichBlock
	| AnimationRichBlock
	| AudioRichBlock
	| PhotoRichBlock
	| VideoRichBlock
	| VoiceNoteRichBlock
	| ThinkingRichBlock;

export function createRichBlock(data: APIRichBlock): RichBlock {
	switch (data.type) {
		case RichBlockType.Paragraph:
			return new ParagraphRichBlock(data);
		case RichBlockType.SectionHeading:
			return new SectionHeadingRichBlock(data);
		case RichBlockType.Preformatted:
			return new PreformattedRichBlock(data);
		case RichBlockType.Footer:
			return new FooterRichBlock(data);
		case RichBlockType.Divider:
			return new DividerRichBlock(data);
		case RichBlockType.MathematicalExpression:
			return new MathematicalExpressionRichBlock(data);
		case RichBlockType.Anchor:
			return new AnchorRichBlock(data);
		case RichBlockType.List:
			return new ListRichBlock(data);
		case RichBlockType.BlockQuotation:
			return new BlockQuotationRichBlock(data);
		case RichBlockType.PullQuotation:
			return new PullQuotationRichBlock(data);
		case RichBlockType.Collage:
			return new CollageRichBlock(data);
		case RichBlockType.Slideshow:
			return new SlideshowRichBlock(data);
		case RichBlockType.Table:
			return new TableRichBlock(data);
		case RichBlockType.Details:
			return new DetailsRichBlock(data);
		case RichBlockType.Map:
			return new MapRichBlock(data);
		case RichBlockType.Animation:
			return new AnimationRichBlock(data);
		case RichBlockType.Audio:
			return new AudioRichBlock(data);
		case RichBlockType.Photo:
			return new PhotoRichBlock(data);
		case RichBlockType.Video:
			return new VideoRichBlock(data);
		case RichBlockType.VoiceNote:
			return new VoiceNoteRichBlock(data);
		case RichBlockType.Thinking:
			return new ThinkingRichBlock(data);
		default:
			return new BaseRichBlock<never>(data);
	}
}
