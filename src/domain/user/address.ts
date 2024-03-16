import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => UserEntity, user => user.addresses, { cascade: true })
  user: UserEntity;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @Column()
  alias: string;

  @Column({ name: 'is_default' })
  isDefault: boolean;
}
