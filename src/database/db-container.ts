/** 
 * Dependency injection container registration 
 */
import "npm:reflect-metadata";
import { container } from "npm:tsyringe";
import IDatabase from "./db-interface.ts";
import DatabasePg from "./db-pgsql.ts";

container.register<IDatabase>(DatabasePg, {
    useClass: DatabasePg
});