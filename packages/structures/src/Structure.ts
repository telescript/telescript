const dataProperty = Symbol.for('@telescript/structure::data');

export abstract class Structure<Data> {
	static DataProperty: typeof dataProperty = dataProperty;

	public readonly [dataProperty]: Data;

	public constructor(data: Data) {
		this[dataProperty] = data;
	}
}
