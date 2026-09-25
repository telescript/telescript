import { APIPassportFile } from './file.js';

export interface APIPassportData {
	data: APIEncryptedPassportElement[];
	credentials: APIEncryptedCredentials;
}

export enum EncryptedPassportElementType {
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
	type: EncryptedPassportElementType;
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
