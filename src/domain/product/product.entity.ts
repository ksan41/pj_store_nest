import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { Money } from "./vo/money";
import { FileEntity } from "./file.entity";

@Entity({ name: 'product' })
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'product_name' })
    productName: string;

    @Column({ name: 'category_id' })
    category_id: number

    @ManyToOne(type => CategoryEntity, category => category.products)
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity;

    @Column()
    discription: string;

    @Column('tinyint', { name: 'price'})
    price: Money;

    @Column()
    quantity: number;

    @OneToMany(type => FileEntity, image => image.id)
    images: FileEntity[];

}