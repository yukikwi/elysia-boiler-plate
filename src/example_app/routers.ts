import Elysia, { t } from "elysia"
import views from "./views"
import { insertAnimalValidators } from "./validators"

const appPrefix = "/example_app"
const app = new Elysia({ prefix: appPrefix })
  .get("/", views.indexView)
  .post("/animal", views.insertAnimal, {
    body: insertAnimalValidators
  })

export default app