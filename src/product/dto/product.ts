import {Document} from 'mongoose';

export class productDto extends Document{
    readonly name: String;
    readonly price: Number;
    readonly inStock: Number;
    readonly description?: String;
         
    //Metadados
    readonly createdAt: Date;
    readonly updatedAt: Date;
}