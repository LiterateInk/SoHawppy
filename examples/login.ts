import * as sohappy from "../src";
import { credentials } from "./_credentials";

void async function main () {
  const { token } = await sohappy.login(credentials.mail, credentials.password);

  console.log(token.value);
  console.log("Token expires the", token.expirationDate.toLocaleString("fr-FR"));
}();
