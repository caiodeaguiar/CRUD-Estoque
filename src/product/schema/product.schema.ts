import * as mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    inStock: Number,
    description: String,
         
    //Metadados
    createdAt: {
        type: Date,
        immutable: true
},
    updatedAt: Date,
});