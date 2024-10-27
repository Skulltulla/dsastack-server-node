import App from "./app/app.ts";

if (import.meta.main) {
    const app = new App("untitled");
    app.start();
}