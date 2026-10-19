import type { Resolve } from '../registry.js';
import { APIStoryAreaType, StoryAreaType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { BaseStoryAreaType } from './BaseStoryAreaType.js';

export class LinkStoryAreaType extends BaseStoryAreaType<StoryAreaType.Link, APIStoryAreaType.Link> {
	public isLink(): this is Resolve<'LinkStoryAreaType'> {
		return true;
	}

	public get url() {
		return this[Structure.DataProperty].url;
	}
}
