import { RichBlockType } from '@telescript/api-types';
import { Structure } from '../../../Structure.js';
import { BaseRichBlock } from './BaseRichBlock.js';
import { createStructure, type Resolve } from '../../../registry.js';

export class DocumentRichBlock extends BaseRichBlock<RichBlockType.Document> {
	public isDocument(): this is Resolve<'DocumentRichBlock'> {
		return true;
	}

	public get document(): Resolve<'Document'> {
		return createStructure(this[Structure.OwnerProperty], 'Document', this[Structure.DataProperty].document);
	}

	public get caption(): Resolve<'RichBlockCaption'> | null {
		const data = this[Structure.DataProperty].caption;
		return data ? createStructure(this[Structure.OwnerProperty], 'RichBlockCaption', data) : null;
	}
}
