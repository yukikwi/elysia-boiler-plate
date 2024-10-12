import { Context } from "elysia"
import { auth } from "../lib/auth";

const betterAuthView = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
  // validate request method
  if(BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    return auth.handler(context.request);
  }
  else {
    context.error(405)
  }
}

// export application views
export default {
  betterAuthView
}