import { Elysia } from "elysia";
import exampleApp from "./example_app/routers";
import { APP_PORT } from "./config";

const app = new Elysia()
  .use(exampleApp)
  .listen(APP_PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
