import { Elysia } from "elysia";
import staticPlugin from "@elysiajs/static";
import { swagger } from '@elysiajs/swagger'
import { APP_PORT, SWAGGER_PATH } from "./config";
import exampleApp from "./example_app/routers";

const app = new Elysia()
  // static plugin 
  // more information: https://elysiajs.com/plugins/static
  .use(staticPlugin())
  // swagger plugin
  .use(swagger({
    path: SWAGGER_PATH
  }))
  .use(exampleApp)
  .listen(APP_PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
