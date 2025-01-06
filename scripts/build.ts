import fs from "fs";
import path from "path";
import { SETTINGS } from "../src/settings";

function build() {
  const destinationPath = path.join(SETTINGS.basePath, "dist", "prisma");

  const dbPath = path.join(SETTINGS.basePath, "prisma", "tasks.db");
  const dbDestination = path.join(destinationPath, "tasks.db");

  const schemaPath = path.join(SETTINGS.basePath, "prisma", "schema.prisma");
  const schemaDestination = path.join(destinationPath, "schema.prisma");

  const clientPath = path.join(SETTINGS.basePath, "prisma", "client");
  const clientPathDestination = path.join(destinationPath, "client");

  fs.mkdirSync(destinationPath);
  fs.copyFileSync(dbPath, dbDestination);
  fs.copyFileSync(schemaPath, schemaDestination);
  fs.cpSync(clientPath, clientPathDestination, { recursive: true });
}

build();
