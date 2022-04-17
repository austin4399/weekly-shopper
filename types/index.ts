import {Document} from 'mongoose';

export interface IngredientDocument extends Document {
    name: string;
    description: string;
    type: string;
    cost: number | null;
}
export interface RecipeInput {
    title: string;
    description: string;
    ingredients: [IngredientDocument];
}
export interface RecipeDocument extends RecipeInput, Document {
    createdAt: Date;
    updatedAt: Date;
}