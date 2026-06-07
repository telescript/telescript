export class HTTPError extends Error {
	public status: number;

	public constructor(public cause: Response) {
		super(cause.statusText);
		this.status = cause.status;
	}
}
