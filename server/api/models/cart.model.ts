import { RecipeDocument } from './recipe.model';

export interface cartSchema {
    createdAt: Date;
    recipes: [RecipeDocument];
}