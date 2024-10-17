import { Elysia } from "elysia";
import staticPlugin from "@elysiajs/static";
import { swagger } from '@elysiajs/swagger'
import { APP_PORT, FRONTEND_URL, SWAGGER_PATH } from "./config";
import cors from "@elysiajs/cors";
import exampleApp from "./example_app/routers";
import authApp from "./auth/routers";
import userApp from "./user/routers";

const app = new Elysia()
  // static plugin 
  // more information: https://elysiajs.com/plugins/static
  .use(staticPlugin())
  // swagger plugin
  .use(swagger({
    path: SWAGGER_PATH
  }))
  // cors
  .use(cors({
    origin: FRONTEND_URL
  }))
  // load apps
  .use(exampleApp)
  .use(authApp)
  .use(userApp)
  .listen(APP_PORT);

export type BackendApp = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
