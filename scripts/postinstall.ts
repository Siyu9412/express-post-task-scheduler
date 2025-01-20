import { execSync } from "child_process";
import path from "path";

const schemaPath = path.resolve(
  path.join(path.dirname(path.dirname(__dirname)), "prisma", "schema.prisma")
);

execSync(`npx prisma db push --schema ${schemaPath}`);
