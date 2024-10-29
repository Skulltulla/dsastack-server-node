import "reflect-metadata";

import { autoInjectable } from "tsyringe";
import type IDatabase from "./db-interface.ts";

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
    /**
     * 
     */
    constructor() {
        console.log('DatabasePg::()');
    }

    /**
     * @implements IDatabase::connectAsync
     */
    public connectAsync(): Promise<void> {
        console.log('DatabasePg::connectAsync()');
        return Promise.resolve();
    }

    /**
     * @implements IDatabase::disconnectAsync
     */
    public disconnectAsync(): Promise<void> {
        console.log('DatabasePg::disconnectAsync()');
        return Promise.resolve();
    }

    /**
     * @implements IDatabase::runMigrationsAsync
     */
    public runMigrationsAsync(): Promise<void> {
        console.log('DatabasePg::runMigrationsAsync()');
        return Promise.resolve();
    }
}
