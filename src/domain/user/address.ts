import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(type => UserEntity, user => user.addresses, { cascade: true })
  @JoinColumn({ name: 'user_id' })
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
