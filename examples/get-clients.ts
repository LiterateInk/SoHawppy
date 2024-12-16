import * as sohappy from "../src";
import { credentials } from "./_credentials";

void async function main () {
  const { token, universe } = await sohappy.login(credentials.mail, credentials.password);

  const clients = await sohappy.getClients(token.value, universe.code);

  console.log(clients);
}();
