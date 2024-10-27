import "npm:reflect-metadata";

import { container } from "npm:tsyringe";
import App from "./app/app.ts";
import DatabasePg from "./database/db-pgsql.ts";

if (import.meta.main) {
    const dbpg = container.resolve(DatabasePg)
    const app = new App(dbpg);
    app.start();
    app.stop();
}