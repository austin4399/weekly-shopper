import {array, object, string, number, TypeOf} from "zod";

export const ingredientSchema = object({
  name: string(),
  description: string(),
  type: string(),
  cost: number()
})

export const createRecipeSchema = object({
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string().min(6, "Description must be at least 6 characters long"),
    ingredients: array(ingredientSchema)
  }),
});

export type CreateRecipeInput = TypeOf<typeof createRecipeSchema>;
