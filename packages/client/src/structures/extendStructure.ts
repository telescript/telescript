import type { Constructor, Structure } from '@telescript/structures';

/**
 * Creates a subclass of `Parent` with the same name and the members of `mixins`.
 *
 * @internal
 */
export function extendStructure(Parent: Constructor<Structure<unknown>>, mixins: Constructor[]): Constructor {
	const Base = Parent as unknown as typeof Structure<unknown>;
	const Class = class extends Base {
		static {
			this.mixin(...mixins);
		}
	};
	Object.defineProperty(Class, 'name', { value: Parent.name });
	return Class;
}
