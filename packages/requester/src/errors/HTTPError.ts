export class HTTPError extends Error {
	public status: number;

	public constructor(res: Response) {
		super(res.statusText, { cause: res });
		this.status = res.status;
	}
}
