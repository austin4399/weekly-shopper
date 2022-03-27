import { FilterQuery, QueryOptions, DocumentDefinition } from "mongoose";
import RecipeModel, { RecipeDocument } from "../models/recipe.model";
// import { databaseResponseTimeHistogram } from "../utils/metrics";

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

export async function findRecipe(
  query: FilterQuery<RecipeDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {operation: "findProduct",};

  // const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await RecipeModel.findOne(query, {}, options);
    // timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e: any) {
    // timer({ ...metricsLabels, success: "false" });
    throw new Error(e);
  }
}

// Get the count of all users
export async function findRandomRecipe(){
  try {
      let randomRecipe: any = ''
      RecipeModel.count().exec(function(err: any, count: number) {
      
      // Get a random entry
      var random = Math.floor(Math.random() * count)
  
      // Again query all users but only fetch one offset by our random #
      RecipeModel.findOne().skip(random).exec(
        function (err, result) {
          // Tada! random user
          randomRecipe = result
        })
    })
    return randomRecipe;   
  } catch (e: any) {
    throw new Error(e);
  }

}

export async function findRandomRecipeTest(size: number){
  const result = RecipeModel.aggregate([{ $sample: { size: size } }]);
  return result;
}