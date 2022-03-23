import mongoose from 'mongoose';
import ingredientSchema from './ingredient.model';
import { IngredientDocument } from './ingredient.model';

export interface RecipeInput {
    title: string;
    description: string;
    ingredients: [IngredientDocument];
}
export interface recipeDocumemt extends RecipeInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    ingredients: [ingredientSchema],
},
{
    timestamps: true
})

const RecipeModel = mongoose.model<IngredientDocument>("Ingredients", recipeSchema);

export default RecipeModel;