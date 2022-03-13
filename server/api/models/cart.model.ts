import { recipeDocumemt } from './recipe.model';

export interface cartSchema {
    createdAt: Date;
    recipes: [recipeDocumemt];
}