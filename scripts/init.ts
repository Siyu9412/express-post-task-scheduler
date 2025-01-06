import fs from "fs";
import path from "path";
import { SETTINGS } from "../src/settings";

function init() {
  const dbPath = path.join(SETTINGS.basePath, "prisma", "tasks.db");
  const distPath = path.join(SETTINGS.basePath, "dist");
  fs.rmSync(dbPath, { force: true });
  fs.rmSync(distPath, { force: true, recursive: true });
}

init();
