import { APIWebAppInfo } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class WebAppInfo extends Structure<APIWebAppInfo> {
	public get url() {
		return this[Structure.DataProperty].url;
	}
}
