import * as sohappy from "../src";
import { credentials } from "./_credentials";

void async function main () {
  const { token, universe } = await sohappy.login(credentials.mail, credentials.password);

  const clients = await sohappy.getClients(token.value, universe.code);

  const badge = await sohappy.getBadge(token.value, clients[0].id);

  console.log(badge)
}();
