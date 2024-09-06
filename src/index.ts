import { Elysia } from "elysia";
import exampleApp from "./example_app/routers";
import { APP_PORT } from "./config";
import staticPlugin from "@elysiajs/static";

const app = new Elysia()
  // static plugin 
  // more information: https://elysiajs.com/plugins/static
  .use(staticPlugin())
  .use(exampleApp)
  .listen(APP_PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
