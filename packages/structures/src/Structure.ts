const dataProperty = Symbol.for('@telescript/structure::data');

export type Constructor<T = {}> = new (...args: any[]) => T;

export abstract class Structure<Data> {
	static DataProperty: typeof dataProperty = dataProperty;

	public readonly [dataProperty]: Data;

	public constructor(data: Data) {
		this[dataProperty] = data;
	}

	protected static mixin(...mixins: Constructor[]) {
		for (const mixin of mixins) {
			for (const key of Reflect.ownKeys(mixin.prototype)) {
				if (key === 'constructor') continue;

				Object.defineProperty(this.prototype, key, Object.getOwnPropertyDescriptor(mixin.prototype, key)!);
			}
		}
	}
}
