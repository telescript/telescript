import { APIPoll } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { createMessageEntity } from './entity/index.js';
import { PollMedia } from './PollMedia.js';
import { PollOption } from './PollOption.js';

export class Poll extends Structure<APIPoll> {
	public get id() {
		return this[Structure.DataProperty].id;
	}

	public get question() {
		return this[Structure.DataProperty].question;
	}

	public get questionEntities() {
		const data = this[Structure.DataProperty].question_entities;
		return data ? data.map((entity) => createMessageEntity(entity, this[Structure.DataProperty].question)) : null;
	}

	public get options() {
		return this[Structure.DataProperty].options.map((data) => new PollOption(data));
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
		return this[Structure.DataProperty].allows_revoting ?? null;
	}

	public get membersOnly() {
		return this[Structure.DataProperty].members_only ?? null;
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
			? data.map((entity) => createMessageEntity(entity, this[Structure.DataProperty].explanation ?? ''))
			: null;
	}

	public get explanationMedia() {
		const data = this[Structure.DataProperty].explanation_media;
		return data ? new PollMedia(data) : null;
	}

	public get openPeriod() {
		return this[Structure.DataProperty].open_period ?? null;
	}

	public get closeDate() {
		return this[Structure.DataProperty].close_date ?? null;
	}

	public get description() {
		return this[Structure.DataProperty].description ?? null;
	}

	public get descriptionEntities() {
		const data = this[Structure.DataProperty].description_entities;
		return data
			? data.map((entity) => createMessageEntity(entity, this[Structure.DataProperty].description ?? ''))
			: null;
	}

	public get media() {
		const data = this[Structure.DataProperty].media;
		return data ? new PollMedia(data) : null;
	}
}
