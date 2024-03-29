import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from 'src/api/product.controller';
import { ProductService } from './service/product.service';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './repository/product.repository';

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity])
    ],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository]
})
export class ProductModule {}
