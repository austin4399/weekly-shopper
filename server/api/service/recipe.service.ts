import { DocumentDefinition } from "mongoose";
import RecipeModel, { RecipeDocument } from "../models/recipe.model";

export async function createRecipe(
  input: DocumentDefinition<Omit<RecipeDocument, "createdAt" | "updatedAt">>
) {
  try {
    const recipe = await RecipeModel.create(input);
    return recipe;
  } catch (e: any) {
    throw new Error(e);
  }
}
