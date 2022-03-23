import { any, array, never, number, object, optional, string, TypeOf, unknown} from "zod";
import ingredientSchema, { IngredientDocument } from "../models/ingredient.model";

export const createRecipeSchema = object({
  body: object({
    title: string({
      required_error: "Name is required",
    }),
    description: string().min(6, "Description must be at least 6 characters long"),
    ingredients: never()
  }),
});

export type CreateRecipeInput = TypeOf<typeof createRecipeSchema>;
