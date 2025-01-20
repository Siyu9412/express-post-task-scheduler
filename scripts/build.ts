import fs from "fs";
import path from "path";
import { SETTINGS } from "../src/settings";

function build() {
  const destinationPath = path.join(SETTINGS.basePath, "dist", "prisma");

  const schemaPath = path.join(SETTINGS.basePath, "prisma", "schema.prisma");
  const schemaDestination = path.join(destinationPath, "schema.prisma");

  fs.mkdirSync(destinationPath);
  fs.copyFileSync(schemaPath, schemaDestination);
}

build();
