import * as mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    inStock: Number,
    description: String,
         
    //Metadados
    createdAt: Date,
    updatedAt: Date,
});