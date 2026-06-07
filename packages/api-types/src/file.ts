export interface FileBase {
	file_id: string;
	file_unique_id: string;
	file_size?: number;
}

export interface APIFile extends FileBase {
	file_path?: string;
}

export interface APIPassportFile extends FileBase {
	file_size: number;
	file_date: number;
}
