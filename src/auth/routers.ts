import Elysia, { t } from "elysia"
import views from "./views"

const appPrefix = "/api/auth"
const app = new Elysia({ prefix: appPrefix })
  .all("/*", views.betterAuthView)

export default app