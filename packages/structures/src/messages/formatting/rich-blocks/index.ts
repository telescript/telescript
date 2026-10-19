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
import { ExpandableBlockQuotationRichBlock } from './ExpandableBlockQuotation.js';
import { PullQuotationRichBlock } from './PullQuotation.js';
import { CollageRichBlock } from './Collage.js';
import { SlideshowRichBlock } from './Slideshow.js';
import { TableRichBlock } from './Table.js';
import { DetailsRichBlock } from './Details.js';
import { MapRichBlock } from './Map.js';
import { ButtonsRichBlock } from './Buttons.js';
import { AnimationRichBlock } from './Animation.js';
import { AudioRichBlock } from './Audio.js';
import { DocumentRichBlock } from './Document.js';
import { PhotoRichBlock } from './Photo.js';
import { VideoRichBlock } from './Video.js';
import { VoiceNoteRichBlock } from './VoiceNote.js';
import { ThinkingRichBlock } from './Thinking.js';
import {
	createStructure,
	defaultOwner,
	registerStructures,
	type StructureOwner,
	type Resolve,
} from '../../../registry.js';
import { RichBlockCaption } from './RichBlockCaption.js';
import { RichBlockListItem } from './RichBlockListItem.js';
import { RichMessageButton } from './RichMessageButton.js';
import { RichBlockTableCell } from './RichBlockTableCell.js';

export * from './BaseRichBlock.js';
export * from './RichBlockListItem.js';
export * from './RichBlockCaption.js';
export * from './RichBlockTableCell.js';
export * from './RichMessageButton.js';
export * from './Paragraph.js';
export * from './SectionHeading.js';
export * from './Preformatted.js';
export * from './Footer.js';
export * from './Divider.js';
export * from './MathematicalExpression.js';
export * from './Anchor.js';
export * from './List.js';
export * from './BlockQuotation.js';
export * from './ExpandableBlockQuotation.js';
export * from './PullQuotation.js';
export * from './Collage.js';
export * from './Slideshow.js';
export * from './Table.js';
export * from './Details.js';
export * from './Map.js';
export * from './Buttons.js';
export * from './Animation.js';
export * from './Audio.js';
export * from './Document.js';
export * from './Photo.js';
export * from './Video.js';
export * from './VoiceNote.js';
export * from './Thinking.js';

export type RichBlock =
	| Resolve<'BaseRichBlock'>
	| Resolve<'ParagraphRichBlock'>
	| Resolve<'SectionHeadingRichBlock'>
	| Resolve<'PreformattedRichBlock'>
	| Resolve<'FooterRichBlock'>
	| Resolve<'DividerRichBlock'>
	| Resolve<'MathematicalExpressionRichBlock'>
	| Resolve<'AnchorRichBlock'>
	| Resolve<'ListRichBlock'>
	| Resolve<'BlockQuotationRichBlock'>
	| Resolve<'ExpandableBlockQuotationRichBlock'>
	| Resolve<'PullQuotationRichBlock'>
	| Resolve<'CollageRichBlock'>
	| Resolve<'SlideshowRichBlock'>
	| Resolve<'TableRichBlock'>
	| Resolve<'DetailsRichBlock'>
	| Resolve<'MapRichBlock'>
	| Resolve<'ButtonsRichBlock'>
	| Resolve<'AnimationRichBlock'>
	| Resolve<'AudioRichBlock'>
	| Resolve<'DocumentRichBlock'>
	| Resolve<'PhotoRichBlock'>
	| Resolve<'VideoRichBlock'>
	| Resolve<'VoiceNoteRichBlock'>
	| Resolve<'ThinkingRichBlock'>;

export function createRichBlock(data: APIRichBlock, owner: StructureOwner = defaultOwner): RichBlock {
	switch (data.type) {
		case RichBlockType.Paragraph:
			return createStructure(owner, 'ParagraphRichBlock', data);
		case RichBlockType.SectionHeading:
			return createStructure(owner, 'SectionHeadingRichBlock', data);
		case RichBlockType.Preformatted:
			return createStructure(owner, 'PreformattedRichBlock', data);
		case RichBlockType.Footer:
			return createStructure(owner, 'FooterRichBlock', data);
		case RichBlockType.Divider:
			return createStructure(owner, 'DividerRichBlock', data);
		case RichBlockType.MathematicalExpression:
			return createStructure(owner, 'MathematicalExpressionRichBlock', data);
		case RichBlockType.Anchor:
			return createStructure(owner, 'AnchorRichBlock', data);
		case RichBlockType.List:
			return createStructure(owner, 'ListRichBlock', data);
		case RichBlockType.BlockQuotation:
			return createStructure(owner, 'BlockQuotationRichBlock', data);
		case RichBlockType.ExpandableBlockQuotation:
			return createStructure(owner, 'ExpandableBlockQuotationRichBlock', data);
		case RichBlockType.PullQuotation:
			return createStructure(owner, 'PullQuotationRichBlock', data);
		case RichBlockType.Collage:
			return createStructure(owner, 'CollageRichBlock', data);
		case RichBlockType.Slideshow:
			return createStructure(owner, 'SlideshowRichBlock', data);
		case RichBlockType.Table:
			return createStructure(owner, 'TableRichBlock', data);
		case RichBlockType.Details:
			return createStructure(owner, 'DetailsRichBlock', data);
		case RichBlockType.Map:
			return createStructure(owner, 'MapRichBlock', data);
		case RichBlockType.Buttons:
			return createStructure(owner, 'ButtonsRichBlock', data);
		case RichBlockType.Animation:
			return createStructure(owner, 'AnimationRichBlock', data);
		case RichBlockType.Audio:
			return createStructure(owner, 'AudioRichBlock', data);
		case RichBlockType.Document:
			return createStructure(owner, 'DocumentRichBlock', data);
		case RichBlockType.Photo:
			return createStructure(owner, 'PhotoRichBlock', data);
		case RichBlockType.Video:
			return createStructure(owner, 'VideoRichBlock', data);
		case RichBlockType.VoiceNote:
			return createStructure(owner, 'VoiceNoteRichBlock', data);
		case RichBlockType.Thinking:
			return createStructure(owner, 'ThinkingRichBlock', data);
		default:
			return createStructure(owner, 'BaseRichBlock', data);
	}
}

declare module '../../../registry.js' {
	interface DefaultTypes {
		AnchorRichBlock: AnchorRichBlock;
		AnimationRichBlock: AnimationRichBlock;
		AudioRichBlock: AudioRichBlock;
		BaseRichBlock: BaseRichBlock<never>;
		BlockQuotationRichBlock: BlockQuotationRichBlock;
		ButtonsRichBlock: ButtonsRichBlock;
		CollageRichBlock: CollageRichBlock;
		DetailsRichBlock: DetailsRichBlock;
		DividerRichBlock: DividerRichBlock;
		DocumentRichBlock: DocumentRichBlock;
		ExpandableBlockQuotationRichBlock: ExpandableBlockQuotationRichBlock;
		FooterRichBlock: FooterRichBlock;
		ListRichBlock: ListRichBlock;
		MapRichBlock: MapRichBlock;
		MathematicalExpressionRichBlock: MathematicalExpressionRichBlock;
		ParagraphRichBlock: ParagraphRichBlock;
		PhotoRichBlock: PhotoRichBlock;
		PreformattedRichBlock: PreformattedRichBlock;
		PullQuotationRichBlock: PullQuotationRichBlock;
		RichBlockCaption: RichBlockCaption;
		RichBlockListItem: RichBlockListItem;
		RichBlockTableCell: RichBlockTableCell;
		RichMessageButton: RichMessageButton;
		SectionHeadingRichBlock: SectionHeadingRichBlock;
		SlideshowRichBlock: SlideshowRichBlock;
		TableRichBlock: TableRichBlock;
		ThinkingRichBlock: ThinkingRichBlock;
		VideoRichBlock: VideoRichBlock;
		VoiceNoteRichBlock: VoiceNoteRichBlock;
	}
}

registerStructures({
	AnchorRichBlock,
	AnimationRichBlock,
	AudioRichBlock,
	BaseRichBlock,
	BlockQuotationRichBlock,
	ButtonsRichBlock,
	CollageRichBlock,
	DetailsRichBlock,
	DividerRichBlock,
	DocumentRichBlock,
	ExpandableBlockQuotationRichBlock,
	FooterRichBlock,
	ListRichBlock,
	MapRichBlock,
	MathematicalExpressionRichBlock,
	ParagraphRichBlock,
	PhotoRichBlock,
	PreformattedRichBlock,
	PullQuotationRichBlock,
	RichBlockCaption,
	RichBlockListItem,
	RichBlockTableCell,
	RichMessageButton,
	SectionHeadingRichBlock,
	SlideshowRichBlock,
	TableRichBlock,
	ThinkingRichBlock,
	VideoRichBlock,
	VoiceNoteRichBlock,
});
