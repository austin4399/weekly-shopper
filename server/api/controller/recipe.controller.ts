import { Request, Response, NextFunction, request } from "express";
import { createRecipe, findRecipe } from "../service/recipe.service";
import { CreateRecipeInput } from "../schema/recipe.schema";

export async function createRecipeHandler(
  req: Request<{}, {}, CreateRecipeInput["body"]>,
  res: Response
) {
  const recipe = await createRecipe({ ...req.body });
  return res.send(recipe);
}

export async function findRecipeHander(
  req: Request,
  res: Response
){
  const recipes = await findRecipe(req.query);
  return res.send(recipes);
}