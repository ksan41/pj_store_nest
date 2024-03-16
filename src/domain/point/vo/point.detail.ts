import { Column, Entity } from "typeorm";

export class PointDetail {
  
  @Column({ name: 'reg_date' })
  regDate: Date;

  @Column({ name: 'expiration_date' })
  expirationDate: Date;
  
  @Column()
  amount: number;
}
