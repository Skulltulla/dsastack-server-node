import "reflect-metadata";

import { container } from "tsyringe";
import App from "./modules/app/app.js";
import DatabasePg from "./modules/database/db-pgsql.js";

function main() {
    const dbpg = container.resolve(DatabasePg);
    const app = new App(dbpg);
    app.start();
    app.stop();
}

main();
