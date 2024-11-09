import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productSchema } from './schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Product', schema: productSchema}])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
