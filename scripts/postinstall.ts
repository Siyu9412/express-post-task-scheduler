if (process.env.CI) {
  console.log("Skipping postinstall script in CI environment.");
  process.exit(0);
}

import { execSync } from "child_process";

execSync("npx prisma db push --schema ../prisma/schema/prisma");
