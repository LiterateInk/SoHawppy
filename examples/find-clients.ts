import * as sohappy from "../src";
import { credentials } from "./_credentials";

void async function main () {
  const { token } = await sohappy.login(credentials.mail, credentials.password);
  const clients = await sohappy.findClients(token.value, "Paris", sohappy.UsageCode.Students);

  console.log(clients);
}();
