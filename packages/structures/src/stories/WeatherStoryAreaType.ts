import type { Resolve } from '../registry.js';
import { APIStoryAreaType, StoryAreaType } from '@telescript/api-types';
import { Structure } from '../Structure.js';
import { BaseStoryAreaType } from './BaseStoryAreaType.js';

export class WeatherStoryAreaType extends BaseStoryAreaType<StoryAreaType.Weather, APIStoryAreaType.Weather> {
	public isWeather(): this is Resolve<'WeatherStoryAreaType'> {
		return true;
	}

	public get temperature() {
		return this[Structure.DataProperty].temperature;
	}

	public get emoji() {
		return this[Structure.DataProperty].emoji;
	}

	public get backgroundColor() {
		return this[Structure.DataProperty].background_color;
	}
}
