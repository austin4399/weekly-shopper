import mongoose from 'mongoose';

export interface IngredientDocument extends mongoose.Document {
    name: string;
    description: string;
    type: string;
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

export default ingredientSchema;
