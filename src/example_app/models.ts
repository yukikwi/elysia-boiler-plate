import { pgTable, serial, uniqueIndex, varchar } from "drizzle-orm/pg-core";

// Guide: https://orm.drizzle.team/docs/sql-schema-declaration
export const animals = pgTable('animals', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  scienceName: varchar('science_name', { length: 512 }),
}, (countries) => {
  return {
    nameIndex: uniqueIndex('name_idx').on(countries.name),
  }
});

export type Animal = typeof animals.$inferSelect // return type when queried
export type NewAnimal = typeof animals.$inferInsert // insert type