import "reflect-metadata";

import { autoInjectable } from "tsyringe";
import type IDatabase from "./db-interface.js";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

/**
 * @name DatabasePg
 *
 * @description
 * Database class for a PostgreSQL database.
 *
 * @implements IDatabase
 */
@autoInjectable()
export default class DatabasePg implements IDatabase {
    /** */
    constructor() {
        console.log("DatabasePg::()");
    }

    /**
     * @implements IDatabase::connectAsync
     */
    public async connectAsync(): Promise<void> {
        console.log("DatabasePg::connectAsync()");
        return Promise.resolve();
    }

    /**
     * @implements IDatabase::disconnectAsync
     */
    public async disconnectAsync(): Promise<void> {
        console.log("DatabasePg::disconnectAsync()");
        return Promise.resolve();
    }

    /**
     * @implements IDatabase::runMigrationsAsync
     */
    public async runMigrationsAsync(): Promise<void> {
        console.log("DatabasePg::runMigrationsAsync()");

        try {
            const db = drizzle(process.env.PG_CONNECTION_STRING!);
            await migrate(db, {
                migrationsFolder: "./dist/db/pg/drizzle",
            });
        } catch (e) {
            throw e;
        }
    }
}
