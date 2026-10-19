import { registerStructures } from '../../registry.js';
import { Contact } from './Contact.js';
import { Dice } from './Dice.js';
import { Link } from './Link.js';
import { Venue } from './Venue.js';
export * from './Contact.js';
export * from './Dice.js';
export * from './Venue.js';
export * from './Link.js';

declare module '../../registry.js' {
	interface DefaultTypes {
		Contact: Contact;
		Dice: Dice;
		Link: Link;
		Venue: Venue;
	}
}

registerStructures({ Contact, Dice, Link, Venue });
