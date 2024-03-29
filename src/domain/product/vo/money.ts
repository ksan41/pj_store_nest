import { Get } from "@nestjs/common";
import { Column } from "typeorm";

export class Money {
    
    @Column()
    price: number;

    constructor(price: number) {
        this.price = price;
    }

    @Get()
    getPrice() {
        return this.price;
    }
}