export class HTTPError extends Error {
	public status: number;

	declare cause: Response;

	public constructor(res: Response) {
		super(res.statusText, { cause: res });
		this.status = res.status;
	}
}
