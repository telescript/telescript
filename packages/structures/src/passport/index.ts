import { registerStructures } from '../registry.js';
import { EncryptedCredentials } from './EncryptedCredentials.js';
import { EncryptedPassportElement } from './EncryptedPassportElement.js';
import { PassportData } from './PassportData.js';
export * from './EncryptedCredentials.js';
export * from './EncryptedPassportElement.js';
export * from './PassportData.js';

declare module '../registry.js' {
	interface DefaultTypes {
		EncryptedCredentials: EncryptedCredentials;
		EncryptedPassportElement: EncryptedPassportElement;
		PassportData: PassportData;
	}
}

registerStructures({ EncryptedCredentials, EncryptedPassportElement, PassportData });
