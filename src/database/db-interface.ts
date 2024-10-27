/**
 * @name IDatabase
 * 
 * @description Database interface for dependency injection.
 * 
 * @example Class without Decorator
 * ```typescript
 * class NewDatabase implements IDatabase {
 * }
 * ```

 * @example Class with Decorator
 * ```typescript
 * ```
 */
export default interface IDatabase {
    /**
     * @name connectAsync
     * @description Open connection(s)
     * @returns void
     */
    connectAsync: () => Promise<void>;

    /**
     * @name disconnectAsync 
     * @description Close connection(s)
     * @returns void
     */
    disconnectAsync: () => Promise<void>;

    /**
     * @name runMigrationsAsync
     * @description Create a unique connection, if necessary, and perform database migrations.
     * @returns void
     */
    runMigrationsAsync: () => Promise<void>;
}