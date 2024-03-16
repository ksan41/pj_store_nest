import { Column, Entity } from "typeorm";

export class RateCondition {
    
    @Column({ name: 'purchase_count' })
    purchaseCount: number;

    @Column({ name: 'rate_discount' })
    rateDiscount: number;
}