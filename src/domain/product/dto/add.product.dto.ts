import { Min, MinLength } from "class-validator";

export class AddProductDto {

    @MinLength(1, { message: '상품명은 1자 이상이어야 합니다.' })
    productName: string;

    category_id: number;
    discription: string;
    price: number;

    @Min(1, { message: '상품 개수는 1개 이상이어야 합니다.' })
    quantity: number;
}