import { APIPoll } from '@telescript/api-types';
import { Structure } from '../../Structure.js';
import { createMessageEntity } from '../formatting/entities/index.js';
import { createStructure, type Resolve } from '../../registry.js';

export class Poll extends Structure<APIPoll> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get question() {
		return this[Structure.DataProperty].question;
	}

	public get questionEntities() {
		const data = this[Structure.DataProperty].question_entities;
		return data
			? data.map((entity) =>
					createMessageEntity(entity, this[Structure.DataProperty].question, this[Structure.OwnerProperty]),
				)
			: null;
	}

	public get options(): Resolve<'PollOption'>[] {
		return this[Structure.DataProperty].options.map((data) =>
			createStructure(this[Structure.OwnerProperty], 'PollOption', data),
		);
	}

	public get totalVoterCount() {
		return this[Structure.DataProperty].total_voter_count;
	}

	public get isClosed() {
		return this[Structure.DataProperty].is_closed;
	}

	public get isAnonymous() {
		return this[Structure.DataProperty].is_anonymous;
	}

	public get type() {
		return this[Structure.DataProperty].type;
	}

	public get allowsMultipleAnswers() {
		return this[Structure.DataProperty].allows_multiple_answers;
	}

	public get allowsRevoting() {
		return this[Structure.DataProperty].allows_revoting;
	}

	public get membersOnly() {
		return this[Structure.DataProperty].members_only;
	}

	public get countryCodes() {
		return this[Structure.DataProperty].country_codes ?? null;
	}

	public get correctOptionIds() {
		return this[Structure.DataProperty].correct_option_ids ?? null;
	}

	public get explanation() {
		return this[Structure.DataProperty].explanation ?? null;
	}

	public get explanationEntities() {
		const data = this[Structure.DataProperty].explanation_entities;
		return data
			? data.map((entity) =>
					createMessageEntity(entity, this[Structure.DataProperty].explanation ?? '', this[Structure.OwnerProperty]),
				)
			: null;
	}

	public get explanationMedia(): Resolve<'PollMedia'> | null {
		const data = this[Structure.DataProperty].explanation_media;
		return data ? createStructure(this[Structure.OwnerProperty], 'PollMedia', data) : null;
	}

	public get openPeriod() {
		return this[Structure.DataProperty].open_period ?? null;
	}

	public get closeUnixTimestamp() {
		return this[Structure.DataProperty].close_date ?? null;
	}

	public get closeTimestamp() {
		const ts = this.closeUnixTimestamp;
		return ts ? ts * 1000 : null;
	}

	public get closeDate() {
		const ts = this.closeTimestamp;
		return ts ? new Date(ts) : null;
	}

	public get description() {
		return this[Structure.DataProperty].description ?? null;
	}

	public get descriptionEntities() {
		const data = this[Structure.DataProperty].description_entities;
		return data
			? data.map((entity) =>
					createMessageEntity(entity, this[Structure.DataProperty].description ?? '', this[Structure.OwnerProperty]),
				)
			: null;
	}

	public get media(): Resolve<'PollMedia'> | null {
		const data = this[Structure.DataProperty].media;
		return data ? createStructure(this[Structure.OwnerProperty], 'PollMedia', data) : null;
	}
}
