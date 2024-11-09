import {Document} from 'mongoose'; 

export interface productInterface extends Document{
    name: String,
    price: Number,
    inStock: Number,
    description?: String,
         
    //Metadados
    createdAt: Date,
    updatedAt: Date,
}