import * as sohappy from "../src";
import { credentials } from "./_credentials";

void async function main () {
  const session = await sohappy.login(credentials.mail, credentials.password);

  const clients = await sohappy.getClients(session);

  console.log(clients);
}();
