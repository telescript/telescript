import type { Constructor } from './Structure.js';

/**
 * Instance types of the structures that can be created as nested objects, keyed by class name.
 * Each folder's `index.ts` adds its classes through module augmentation.
 *
 * @internal
 */
export interface DefaultTypes {}

/**
 * Replacements for {@link DefaultTypes} declared by a package that substitutes its own subclasses (the client),
 * through module augmentation. That package also registers the subclasses with {@link registerStructures}, so the
 * runtime classes match these types.
 *
 * @internal
 */
export interface TypeOverrides {}

/**
 * The type a structure named `Name` is created as: its override when one is declared, the default class otherwise.
 */
export type Resolve<Name extends keyof DefaultTypes> = Name extends keyof TypeOverrides
	? TypeOverrides[Name]
	: DefaultTypes[Name];

/**
 * @internal
 */
export type ClassTable = Readonly<Partial<Record<keyof DefaultTypes, Constructor>>>;

/**
 * Whoever created a structure (e.g. the client); its nested structures share it.
 *
 * @internal
 */
export interface StructureOwner {}

/**
 * The owner of structures created without one.
 *
 * @internal
 */
export const defaultOwner: StructureOwner = Object.freeze({});

const registeredClasses: Partial<Record<keyof DefaultTypes, Constructor>> = {};

/**
 * Registers the classes structures are created with; a later registration of a name replaces the earlier one.
 *
 * @internal
 */
export function registerStructures(classes: ClassTable) {
	Object.assign(registeredClasses, classes);
}

/**
 * @internal
 */
export function getRegisteredStructures(): ClassTable {
	return registeredClasses;
}

// Structures created from the same data object by the same owner, so repeated getter calls return the same object.
const cache = new WeakMap<StructureOwner, WeakMap<object, Map<string, unknown>>>();

/**
 * Creates the structure named `name` with its registered class. Without extra `args`, the same `owner`, `name` and
 * `data` object always give the same structure.
 *
 * @internal
 */
export function createStructure<Name extends keyof DefaultTypes>(
	owner: StructureOwner,
	name: Name,
	data: unknown,
	...args: unknown[]
): Resolve<Name> {
	const Class = registeredClasses[name];
	if (!Class) throw new Error(`Structure "${name}" is not registered`);

	if (args.length || typeof data !== 'object' || data === null) {
		return new Class(data, owner, ...args) as Resolve<Name>;
	}

	let byData = cache.get(owner);
	if (!byData) cache.set(owner, (byData = new WeakMap()));
	let byName = byData.get(data);
	if (!byName) byData.set(data, (byName = new Map<string, unknown>()));

	let structure = byName.get(name);
	if (!structure) byName.set(name, (structure = new Class(data, owner)));
	return structure as Resolve<Name>;
}
