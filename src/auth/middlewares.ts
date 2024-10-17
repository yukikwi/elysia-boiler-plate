import { auth } from "../lib/auth";

export const userMiddleware = async (request: Request) => {
  const session = await auth.api.getSession({ headers: request.headers });

  if (!session) {
    return {
      user: null,
      session: null
    }
  }

  return {
    user: session.user,
    session: session.session
  }
}