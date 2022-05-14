import {Document} from 'mongoose';

export interface IngredientDocument extends Document {
    name: string;
    description: string;
    type: string;
    cost: number | null;
}

export interface RecipeDocument extends RecipeInput, Document {
    createdAt: Date;
    updatedAt: Date;
}

export type RecipeInput = {
    title: string;
    description: string;
    ingredients: [IngredientDocument];
}

export type Ingredients = {
    name: string
    description: string
    type: string
    cost: number | null
}

export type Recipe = {
    title: string
    description: string
    ingredients: Ingredients[]
}

export type Cart = Recipe[];