import { defaultOwner, type StructureOwner } from './registry.js';

const dataProperty = Symbol.for('@telescript/structure::data');
const ownerProperty = Symbol.for('@telescript/structure::owner');

export type Constructor<T = {}> = new (...args: any[]) => T;

export abstract class Structure<Data> {
	static DataProperty: typeof dataProperty = dataProperty;

	/**
	 * @internal
	 */
	static OwnerProperty: typeof ownerProperty = ownerProperty;

	public readonly [dataProperty]: Data;

	/**
	 * Whoever created this structure; its nested structures share it.
	 *
	 * @internal
	 */
	declare public readonly [ownerProperty]: StructureOwner;

	public constructor(data: Data, owner: StructureOwner = defaultOwner) {
		this[dataProperty] = data;
		Object.defineProperty(this, ownerProperty, { value: owner });
	}

	/**
	 * The raw API data, so `JSON.stringify()` gives the payload this structure was created from.
	 */
	public toJSON(): Data {
		return this[dataProperty];
	}

	protected static mixin(...mixins: Constructor[]) {
		// Members declared in the class body win over mixed-in ones; among mixins, the later one wins.
		const own = new Set(Reflect.ownKeys(this.prototype));

		for (const mixin of mixins) {
			// A mixin may extend another mixin: copy the inherited members too, the most derived winning. Stop at what
			// this class already inherits (`Object.prototype` at the latest).
			const chain: object[] = [];
			for (
				let proto: object | null = mixin.prototype;
				proto && !Object.prototype.isPrototypeOf.call(proto, this.prototype);
				proto = Object.getPrototypeOf(proto)
			) {
				chain.unshift(proto);
			}

			for (const proto of chain) {
				for (const key of Reflect.ownKeys(proto)) {
					if (key === 'constructor' || own.has(key)) continue;

					Object.defineProperty(this.prototype, key, Object.getOwnPropertyDescriptor(proto, key)!);
				}
			}
		}
	}
}
