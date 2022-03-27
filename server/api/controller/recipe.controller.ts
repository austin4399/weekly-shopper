import { Request, Response } from "express";
import { createRecipe } from "../service/recipe.service";
import { CreateRecipeInput } from "../schema/recipe.schema";

export async function createRecipeHandler(
  req: Request<{}, {}, CreateRecipeInput["body"]>,
  res: Response
) {
  const recipe = await createRecipe({ ...req.body });
  return res.send(recipe);
}
