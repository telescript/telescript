import { Client } from '../client/Client.js';

const dataProperty = Symbol.for('@telescript/structure::data');

export class Structure<Data> {
	static DataProperty: typeof dataProperty = dataProperty;

	public readonly [dataProperty]: Data;

	public constructor(
		public readonly client: Client,
		data: Data,
	) {
		this[dataProperty] = data;
	}
}
