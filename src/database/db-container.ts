/** 
 * Dependency injection container registration 
 */
import "reflect-metadata";
import { container } from "tsyringe";
import IDatabase from "./db-interface.js";
import DatabasePg from "./db-pgsql.js";

container.register<IDatabase>(DatabasePg, {
    useClass: DatabasePg
});