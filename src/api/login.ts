import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";
import { LoginResponse } from "~/definitions/login";
import { Token, Universe } from "~/models";

export const login = async (mail: string, password: string, fetcher: Fetcher = defaultFetcher) => {
  const request = new Request("api-app/tokens", "POST")
    .addContentJSON({ mail, password });

  const response = await fetcher(request);

  if (response.status !== 200)
    throw new Error("bad authentication");

  const json: LoginResponse = JSON.parse(response.content);

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
