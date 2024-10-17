import { Session, User } from "../lib/auth";

/**
 * Renders an user information.
 *
 * @returns {object} Object with user and session attributes.
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