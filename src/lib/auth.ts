import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../core/database"; // your drizzle instance
import { DB_PROVIDER } from "../config";
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
});