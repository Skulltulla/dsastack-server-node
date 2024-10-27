import "npm:reflect-metadata";

import { autoInjectable } from "npm:tsyringe";
import type { IApp } from "./app-interface.ts";
import type IDatabase from "../database/db-interface.ts";

@autoInjectable()
export default class App implements IApp {
    private database: IDatabase | undefined;

    constructor(database?: IDatabase) {
        this.database = database;
    }

    public async start() {
        console.log(`App::start()`);
        await this.database?.connectAsync();
    }

    public async stop() {
        console.log(`App::stop()`);
        await this.database?.disconnectAsync();
    }
}
