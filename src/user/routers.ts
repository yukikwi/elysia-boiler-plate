import Elysia, { t } from "elysia"
import views from "./views"
import { userMiddleware } from "../auth/middlewares"

const appPrefix = "/user"
const app = new Elysia({ prefix: appPrefix })
  .derive(({ request }) => userMiddleware(request))
  .get("/info", ({ user, session }) => views.userInfo(user, session))

export default app