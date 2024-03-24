import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: 'category' })
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'category_name' })
    categoryName: string;

    @Column()
    level: number;

    @Column({ name: 'parent_id' })
    parentId: number

    @ManyToOne(type => CategoryEntity, category => category.parentCategory)
    @JoinColumn({ name: 'parent_id' })
    parentCategory: CategoryEntity;

    @OneToMany(type => ProductEntity, product => product.category)
    products: ProductEntity[]
}