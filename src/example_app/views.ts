import { db } from "../core/database"
import { Animal, animals } from "./models"
import { InsertAnimalBody } from "./validators"

/**
 * Renders a simple greeting message.
 *
 * @returns {string} A greeting message saying "Hello world".
 */
const indexView = () => {
  return "Hello world"
}

/**
 * Inserts a new animal record into the database and returns the inserted records.
 *
 * @param {Object} params - The parameters for the function.
 * @param {InsertAnimalBody} params.body - The body containing the data to insert.
 * @param {string} params.body.name - The name of the animal.
 * @param {string} params.body.science_name - The scientific name of the animal.
 * @returns {Promise<Animal[]>} A promise that resolves to an array of the inserted animal records.
 */
const insertAnimal = async ({ body }: {body: InsertAnimalBody}): Promise<Animal[]> => {
  const result = await db.insert(animals).values({
    name: body.name,
    scienceName: body.science_name
  }).returning()

  return result
}

// export application views
export default {
  indexView,
  insertAnimal
}