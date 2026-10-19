import { createStructure, type Resolve } from '../registry.js';
import { APIGameHighScore } from '@telescript/api-types';
import { Structure } from '../Structure.js';

export class GameHighScore extends Structure<APIGameHighScore> {
	public get position() {
		return this[Structure.DataProperty].position;
	}

	public get user(): Resolve<'User'> {
		return createStructure(this[Structure.OwnerProperty], 'User', this[Structure.DataProperty].user);
	}

	public get score() {
		return this[Structure.DataProperty].score;
	}
}
