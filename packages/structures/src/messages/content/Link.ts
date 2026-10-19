import { APILink } from '@telescript/api-types';
import { Structure } from '../../Structure.js';

export class Link extends Structure<APILink> {
	public get url() {
		return this[Structure.DataProperty].url;
	}
}
