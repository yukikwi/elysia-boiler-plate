import { betterAuth } from "better-auth";
import { bearer } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../core/database"; // your drizzle instance
import { BETTER_AUTH_TRUSTED_DOMAIN, DB_PROVIDER } from "../config";
import { account, session, user, verification } from "../auth/models/better_auth";
 
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: DB_PROVIDER,
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification
    }
  }),
  emailAndPassword: {  
    enabled: true
  },
  plugins: [bearer()],
  trustedOrigins: BETTER_AUTH_TRUSTED_DOMAIN !== null? BETTER_AUTH_TRUSTED_DOMAIN : undefined
});

export type Session = typeof auth.$Infer.Session.session
export type User = typeof auth.$Infer.Session.user