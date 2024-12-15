import { test, spyOn, expect } from "bun:test";

import type * as definitions from "~/definitions";
import * as sohappy from "~/api";

import type { Response } from "@literate.ink/utilities";
import * as utils from "@literate.ink/utilities";

test("login", async () => {
  const mocked = {
    expiration_date: "2025-03-15T03:13:09",
    token_value: "VERY_LONG_STRING",
    universe_code: "CONSOMMATEUR",
    mail: "some.mail@provider.fr",
    password: "my-password"
  };

  const response: Response = {
    status: 200,
    headers: {
      "content-type": "application/json;charset=UTF-8"
    },
    content: JSON.stringify({
      default_universe: { code: mocked.universe_code },
      token: { expiration_date: mocked.expiration_date, value: mocked.token_value }
    } as definitions.login)
  };

  const spy = spyOn(utils, "defaultFetcher")
    .mockResolvedValue(response);

  const token = await sohappy.login(mocked.mail, mocked.password);

  expect(spy).toHaveBeenCalledWith(
    expect.objectContaining({
      url: expect.objectContaining({ pathname: "/api-app/tokens" }),
      method: "POST",

      content: expect.stringMatching(JSON.stringify({
        mail: mocked.mail,
        password: mocked.password
      })),

      headers: expect.objectContaining({
        "content-type": "application/json"
      })
    })
  );

  expect(token).toStrictEqual({
    universe: { code: mocked.universe_code },
    token: { expirationDate: new Date(mocked.expiration_date), value: mocked.token_value }
  });

  spy.mockRestore();
});
