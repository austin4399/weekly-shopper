import mongoose from 'mongoose';
import ingredientSchema from './ingredient.model';
import { IngredientDocument } from './ingredient.model';
export interface recipeDocumemt extends mongoose.Document {
    title: string;
    description: string;
    ingredients: [IngredientDocument];
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

export default recipeSchema;