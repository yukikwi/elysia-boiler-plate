import { Elysia } from "elysia";
import staticPlugin from "@elysiajs/static";
import { swagger } from '@elysiajs/swagger'
import { APP_PORT, FRONTEND_URL, SWAGGER_PATH } from "./config";
import exampleApp from "./example_app/routers";
import cors from "@elysiajs/cors";
import authApp from "./auth/routers";

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
  .listen(APP_PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
