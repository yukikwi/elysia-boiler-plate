import { Session, User } from "../lib/auth";

/**
 * Renders a simple greeting message.
 *
 * @returns {string} A greeting message saying "Hello world".
 */
const userInfo = (user: User | null, session: Session | null) => {
  return {
    user: user,
    session: session
  }
}
// export application views
export default {
  userInfo
}