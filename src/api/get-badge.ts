import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";

import type { Badge } from "~/models";
import type * as definitions from "~/definitions";

export const getBadge = async (
  token: string,
  client_id: number,
  fetcher: Fetcher = defaultFetcher
): Promise<Badge> => {
  const request = new Request(`api-app/users/clients/${client_id}/badge`, "GET")
    .addAuthorization(token);

  const response = await fetcher(request);
  const json: definitions.badge = JSON.parse(response.content);

  return {
    alert: {
      isActive: json.alert.is_active,
      limit: json.alert.limit
    },
    available_credits: json.available_credits,
    isCaisseDisabled: json.is_caisse_disabled,
    isValid: json.is_valid,
    isVerified: json.is_verified,
    name: json.name,
    id: json.number,
    solde: json.solde

  } satisfies Badge
};
