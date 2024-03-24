import { Get } from "@nestjs/common";
import { Column } from "typeorm";

export class Money {
    
    @Column()
    value: number;

    @Get()
    getValue() {
        return this.value;
    }
}