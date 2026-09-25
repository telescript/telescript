import { APIDocument } from './media.js';

export enum BackgroundFillType {
	Solid = 'solid',
	Gradient = 'gradient',
	FreeformGradient = 'freeform_gradient',
}

export type APIBackgroundFill =
	| APIBackgroundFill.Solid
	| APIBackgroundFill.Gradient
	| APIBackgroundFill.FreeformGradient;

export namespace APIBackgroundFill {
	export interface Base<Type extends BackgroundFillType> {
		type: Type;
	}

	export interface Solid extends Base<BackgroundFillType.Solid> {
		color: number;
	}

	export interface Gradient extends Base<BackgroundFillType.Gradient> {
		top_color: number;
		bottom_color: number;
		rotation_angle: number;
	}

	export interface FreeformGradient extends Base<BackgroundFillType.FreeformGradient> {
		colors: number[];
	}

	export type FromType<Type extends BackgroundFillType> = Extract<APIBackgroundFill, { type: Type }>;
}

export enum BackgroundTypeType {
	Fill = 'fill',
	Wallpaper = 'wallpaper',
	Pattern = 'pattern',
	ChatTheme = 'chat_theme',
}

export type APIBackgroundType =
	| APIBackgroundType.Fill
	| APIBackgroundType.Wallpaper
	| APIBackgroundType.Pattern
	| APIBackgroundType.ChatTheme;

export namespace APIBackgroundType {
	export interface Base<Type extends BackgroundTypeType> {
		type: Type;
	}

	export interface Fill extends Base<BackgroundTypeType.Fill> {
		fill: APIBackgroundFill;
		dark_theme_dimming: number;
	}

	export interface Wallpaper extends Base<BackgroundTypeType.Wallpaper> {
		document: APIDocument;
		dark_theme_dimming: number;
		is_blurred?: true;
		is_moving?: true;
	}

	export interface Pattern extends Base<BackgroundTypeType.Pattern> {
		document: APIDocument;
		fill: APIBackgroundFill;
		intensity: number;
		is_inverted?: true;
		is_moving?: true;
	}

	export interface ChatTheme extends Base<BackgroundTypeType.ChatTheme> {
		theme_name: string;
	}

	export type FromType<Type extends BackgroundTypeType> = Extract<APIBackgroundType, { type: Type }>;
}

export interface APIChatBackground {
	type: APIBackgroundType;
}
