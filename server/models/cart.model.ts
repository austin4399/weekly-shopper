import { recipeDocumemt } from '../models/recipe.model';

export interface cartSchema {
    createdAt: Date;
    recipes: [recipeDocumemt];
}