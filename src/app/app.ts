import "reflect-metadata";

import { autoInjectable } from "tsyringe";
import type { IApp } from "./app-interface.js";
import type IDatabase from "../database/db-interface.js";

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
