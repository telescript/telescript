import { APIPassportFile } from './file.js';

export enum PassportElementType {
	PersonalDetails = 'personal_details',
	Passport = 'passport',
	DriverLicense = 'driver_license',
	IdentityCard = 'identity_card',
	InternalPassport = 'internal_passport',
	Address = 'address',
	UtilityBill = 'utility_bill',
	BankStatement = 'bank_statement',
	RentalAgreement = 'rental_agreement',
	PassportRegistration = 'passport_registration',
	TemporaryRegistration = 'temporary_registration',
	PhoneNumber = 'phone_number',
	Email = 'email',
}

export interface APIEncryptedPassportElement {
	type: PassportElementType;
	data?: string;
	phone_number?: string;
	email?: string;
	files?: APIPassportFile[];
	front_side?: APIPassportFile;
	reverse_side?: APIPassportFile;
	selfie?: APIPassportFile;
	translation?: APIPassportFile[];
	hash: string;
}

export interface APIEncryptedCredentials {
	data: string;
	hash: string;
	secret: string;
}

export interface APIPassportData {
	data: APIEncryptedPassportElement[];
	credentials: APIEncryptedCredentials;
}

export enum PassportElementErrorSource {
	Data = 'data',
	FrontSide = 'front_side',
	ReverseSide = 'reverse_side',
	Selfie = 'selfie',
	File = 'file',
	Files = 'files',
	TranslationFile = 'translation_file',
	TranslationFiles = 'translation_files',
	Unspecified = 'unspecified',
}

export type APIPassportElementError =
	| APIPassportElementError.DataField
	| APIPassportElementError.FrontSide
	| APIPassportElementError.ReverseSide
	| APIPassportElementError.Selfie
	| APIPassportElementError.File
	| APIPassportElementError.Files
	| APIPassportElementError.TranslationFile
	| APIPassportElementError.TranslationFiles
	| APIPassportElementError.Unspecified;

export namespace APIPassportElementError {
	export interface Base<Source extends PassportElementErrorSource> {
		source: Source;
		type: string;
	}

	export interface DataField extends Base<PassportElementErrorSource.Data> {
		field_name: string;
		data_hash: string;
		message: string;
	}

	export interface FrontSide extends Base<PassportElementErrorSource.FrontSide> {
		file_hash: string;
		message: string;
	}

	export interface ReverseSide extends Base<PassportElementErrorSource.ReverseSide> {
		file_hash: string;
		message: string;
	}

	export interface Selfie extends Base<PassportElementErrorSource.Selfie> {
		file_hash: string;
		message: string;
	}

	export interface File extends Base<PassportElementErrorSource.File> {
		file_hash: string;
		message: string;
	}

	export interface Files extends Base<PassportElementErrorSource.Files> {
		file_hashes: string[];
		message: string;
	}

	export interface TranslationFile extends Base<PassportElementErrorSource.TranslationFile> {
		file_hash: string;
		message: string;
	}

	export interface TranslationFiles extends Base<PassportElementErrorSource.TranslationFiles> {
		file_hashes: string[];
		message: string;
	}

	export interface Unspecified extends Base<PassportElementErrorSource.Unspecified> {
		element_hash: string;
		message: string;
	}

	export type FromSource<Source extends PassportElementErrorSource> = Extract<
		APIPassportElementError,
		{ source: Source }
	>;
}
