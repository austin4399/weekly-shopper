import mongoose from 'mongoose';

export interface IngredientInput extends mongoose.Document {
    title: string;
    description: string;
    ingredients: [IngredientDocument];
}
export interface IngredientDocument extends IngredientInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true,
    },
    cost:{
        type: Number,
        required: false,
    }
})

const IngredientModel = mongoose.model<IngredientDocument>("Ingredients", ingredientSchema);

export default IngredientModel;
