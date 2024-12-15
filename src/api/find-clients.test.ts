import { test, spyOn, expect } from "bun:test";

import type * as definitions from "~/definitions";
import * as sohappy from "~/index";

import type { Response } from "@literate.ink/utilities";
import * as utils from "@literate.ink/utilities";

test("findClients", async () => {
  const mocked = {
    token: "VERY_LONG_STRING",
    code: sohappy.UsageCode.Student,
    city: "Paris",

    clients: [
      {
        id: 1,
        name: "Client 1",
        clientAddressCity: "Paris",
        clientAddressStreet: "1, Rue de Paris",
        clientAddressZipCode: "75001"
      },
      {
        id: 2,
        name: "Client 2",
        clientAddressCity: "Paris",
        clientAddressStreet: "2, Rue de Paris",
        clientAddressZipCode: "75002"
      }
    ] satisfies definitions.find_clients
  };

  const response: Response = {
    status: 200,
    headers: {
      "content-type": "application/json;charset=UTF-8"
    },
    content: JSON.stringify(mocked.clients)
  };

  const spy = spyOn(utils, "defaultFetcher")
    .mockResolvedValue(response);

  const clients = await sohappy.findClients(mocked.token, mocked.city, mocked.code);

  expect(spy).toHaveBeenCalledWith(
    expect.objectContaining({
      method: "GET",
      url: expect.objectContaining({
        pathname: "/api-app/clients",
        search: `?usage_code=${mocked.code}&address_city=${mocked.city}`
      })
    })
  );

  expect(clients).toEqual([
    {
      id: mocked.clients[0].id,
      name: mocked.clients[0].name,
      city: mocked.clients[0].clientAddressCity,
      street: mocked.clients[0].clientAddressStreet,
      zipCode: mocked.clients[0].clientAddressZipCode
    } satisfies sohappy.FoundClient,
    {
      id: mocked.clients[1].id,
      name: mocked.clients[1].name,
      city: mocked.clients[1].clientAddressCity,
      street: mocked.clients[1].clientAddressStreet,
      zipCode: mocked.clients[1].clientAddressZipCode
    } satisfies sohappy.FoundClient
  ]);

  spy.mockRestore();
});
