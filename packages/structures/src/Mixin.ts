export type Constructor<T = {}> = new (...args: any[]) => T;

export function Mixin(target: any, ...mixins: Constructor[]) {
	for (const mixin of mixins) {
		for (const key of Reflect.ownKeys(mixin.prototype)) {
			if (key === 'constructor') continue;

			Object.defineProperty(target.prototype, key, Object.getOwnPropertyDescriptor(mixin.prototype, key)!);
		}
	}
}
