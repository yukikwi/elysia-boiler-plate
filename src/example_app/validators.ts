import { Static, t } from "elysia";

export const insertAnimalValidators = t.Object({
  name: t.String(),
  science_name: t.String()
})
export type InsertAnimalBody = Static<typeof insertAnimalValidators>