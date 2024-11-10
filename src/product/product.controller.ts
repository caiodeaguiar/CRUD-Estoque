import { Controller, Get, Post, Put, Delete, Body, Param, Query} from '@nestjs/common';
import {ProductService} from './product.service'
import {productDto} from './dto/product'
import { productInterface } from './interface/product.interface';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Post()
    public async createProduct(@Body() product: productInterface): Promise<productDto>{
        return await this.productService.createProduct(product);
    }

    @Get()
    public async getAllProducts(): Promise<productDto[]>{
        return await this.productService.getAllProducts();
    }

    @Get(':id')
    public async getProduct(@Param('id') id: string): Promise<productDto> {
        return await this.productService.getProduct(id);
    }

    @Put(':id')
    public async updateProduct(@Param('id') id: string, @Body() updates: productInterface): Promise<productDto>{
        return await this.productService.updateProduct(id, updates);
    }
    

    @Delete(':id')
    public async deleteProduct(@Param('id') id: string){
        return await this.productService.deleteProduct(id);
    }
}
