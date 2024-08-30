import { Elysia } from "elysia";
import exampleApp from "./example_app/routers";

const app = new Elysia()
  .use(exampleApp)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
