import { join } from "node:path";
import { config } from "dotenv";

// Load the `.env` file configuration.
config({ path: join(__dirname, ".env") });

export const credentials = {
  mail: process.env.EMAIL!,
  password: process.env.PASSWORD!
};
