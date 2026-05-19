import { APIMethod } from "@telescript/api-types";
import { Requester } from "@telescript/requester";

export interface PollingOptions {
  requester: Requester;
}

export class Polling {
  public requester: Requester;

  public constructor(options: PollingOptions) {
    const { requester } = options;
    this.requester = requester;
  }

  public async *[Symbol.asyncIterator]() {
    let offset: number | undefined = undefined;

    while (true) {
      const updates = await this.requester.request(APIMethod.GetUpdates, { offset }) as APIMethod.GetUpdates.Result;

      for (const update of updates) {
        yield update;
      }

      const lastUpdate = updates.at(-1);
      if (lastUpdate) {
        offset = lastUpdate.update_id + 1;
      }
    }
  }
}
