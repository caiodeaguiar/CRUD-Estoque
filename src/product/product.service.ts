import { Injectable, HttpException, HttpCode } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { productInterface } from './interface/product.interface';
import { productDto } from './dto/product';
import { throwError } from 'rxjs';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<productInterface>){}

    async createProduct(product: productInterface){
        const createdProduct = await new this.productModel(product);

        createdProduct.createdAt = new Date();
        createdProduct.updatedAt = new Date();
        return createdProduct.save();
    }

    async getAllProducts(): Promise<productDto[]>{
        const products = await this.productModel.find().exec();
        if(!products){
            throw new HttpException('Not Found', 404)
        }
        return products;
    }

    async getProduct(id: string): Promise<productDto>{
        const product = await this.productModel.findById(id).exec();      
        if(!product){
            throw new HttpException('Not Found', 404)
        }
        return product;     
    }

    async updateProduct(id: string, updates: Partial<Omit<productInterface, 'createdAt' | 'updatedAt'>>): Promise<any>{
        
        
        const updated = await this.productModel.updateOne(
            {_id:id},
            {...updates,
            "updatedAt": new Date()
            }
        )
        .exec();
        if(!updated){
            throw new HttpException('Not Found', 404)
        }
        return updated;
    }

    async deleteProduct(id: string): Promise<any>{
        const deleted = await this.productModel.deleteOne({_id: id}).exec();
        if(deleted.deletedCount === 0){
            throw new HttpException('Not Found', 404)
        }
        return deleted; 
    }
}
