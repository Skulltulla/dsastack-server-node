import "npm:reflect-metadata";

import { autoInjectable } from "npm:tsyringe";

@autoInjectable()
export default class App {
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public start() {
        console.log(`App::start(): ${this.message}`);
    }
}