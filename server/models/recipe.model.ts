import mongoose from 'mongoose';
import ingredientSchema from './ingredient.model';

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