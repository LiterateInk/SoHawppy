import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";

import type { FoundClient, UsageCode } from "~/models";
import type * as definitions from "~/definitions";

export const findClients = async (
  token: string, city: string, usageCode: UsageCode,
  fetcher: Fetcher = defaultFetcher
): Promise<Array<FoundClient>> => {
  const request = new Request(`api-app/clients?usage_code=${usageCode}&address_city=${city}`, "GET")
    .addAuthorization(token);

  const response = await fetcher(request);
  const json: definitions.find_clients = JSON.parse(response.content);

  return json.map((client) => ({
    id: client.id,
    name: client.name,
    city: client.clientAddressCity,
    street: client.clientAddressStreet,
    zipCode: client.clientAddressZipCode
  } satisfies FoundClient));
};
