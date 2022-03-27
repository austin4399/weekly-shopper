import mongoose from 'mongoose';

export interface IngredientDocument extends mongoose.Document {
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
export interface RecipeDocument extends RecipeInput, mongoose.Document {
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
    ingredients: [{
        name: {
            type: String,
            required: true,
            unique: false
        },
        description: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        cost: {
            type: String,
            required: false
        }
    }],
},
{
    timestamps: true,
})

const RecipeModel = mongoose.model<RecipeDocument>("Recipes", recipeSchema);

export default RecipeModel;