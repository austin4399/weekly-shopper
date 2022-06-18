import { Request, Response, NextFunction, request } from 'express'
import {
  createRecipe,
  updateRecipe,
  findRecipe,
} from '../service/recipe.service'
import { CreateRecipeInput } from '../schema/recipe.schema'
import { string } from 'zod'

export async function createRecipeHandler(
  req: Request<{}, {}, CreateRecipeInput['body']>,
  res: Response
) {
  const recipe = await createRecipe({ ...req.body })
  return res.send(recipe)
}

export async function findRecipeHander(req: Request, res: Response) {
  const recipes = await findRecipe(req.query)
  return res.send(recipes)
}
export async function updateRecipeHandler(req: Request, res: Response) {
  const recipe = await updateRecipe(req.params._id, { ...req.body })
  return res.send(recipe)
}
