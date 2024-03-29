import { Body, Controller, Post } from "@nestjs/common";
import { AddProductDto } from "src/domain/product/dto/add.product.dto";
import { ProductService } from "src/domain/product/service/product.service";
import { ResponseMsg } from "src/util/response.msg";

@Controller('product')
export class ProductController {
    
    constructor(private readonly productService: ProductService) {}

    @Post('')
    async addProduct(@Body() productInfo: AddProductDto): Promise<ResponseMsg> {
        const res: ResponseMsg = new ResponseMsg();
        const id = await this.productService.addProduct(productInfo);
        res.successWithBody(id);
        return res;
    }
}