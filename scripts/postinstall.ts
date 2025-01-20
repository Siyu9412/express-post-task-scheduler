import { execSync } from "child_process";

execSync("npx prisma db push --schema ../prisma/schema/prisma");
