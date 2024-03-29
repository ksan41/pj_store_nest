import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "../product.entity";
import { Repository } from "typeorm";

export class ProductRepository {

    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) {}

    async save(newProduct: ProductEntity): Promise<number> {
        return (await this.productRepository.save(newProduct)).id;
    }

}