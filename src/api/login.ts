import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";

import type { LoginResponse, Token, Universe } from "~/models";
import type * as definitions from "~/definitions/login";

export const login = async (mail: string, password: string, fetcher: Fetcher = defaultFetcher): Promise<LoginResponse> => {
  const request = new Request("api-app/tokens", "POST")
    .addContentJSON({ mail, password });

  const response = await fetcher(request);

  if (response.status !== 200)
    throw new Error("bad authentication");

  const json: definitions.login = JSON.parse(response.content);

  return {
    universe: {
      code: json.default_universe.code
    } satisfies Universe,

    token: {
      expirationDate: new Date(json.token.expiration_date),
      value: json.token.value
    } satisfies Token
  };
};
