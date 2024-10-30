/**
 * @name IApp
 * @description interface for application class.
 */
export interface IApp {
    start: () => Promise<void>;
    stop: () => Promise<void>;
}