import { Injectable } from "@nestjs/common";
import { AddProductDto } from "../dto/add.product.dto";
import { ProductEntity } from "../product.entity";
import { ProductRepository } from "../repository/product.repository";

@Injectable()
export class ProductService {

    constructor(private readonly productRepository: ProductRepository) {}

    async addProduct(productInfo: AddProductDto): Promise<number> {
        const newProduct = new ProductEntity().toEntity(productInfo);
        return await this.productRepository.save(newProduct);
    }
}