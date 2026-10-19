import { registerStructures } from '../registry.js';
import { File } from './File.js';
import { PassportFile } from './PassportFile.js';
export * from './BaseFile.js';
export * from './File.js';
export * from './PassportFile.js';

declare module '../registry.js' {
	interface DefaultTypes {
		File: File;
		PassportFile: PassportFile;
	}
}

registerStructures({ File, PassportFile });
