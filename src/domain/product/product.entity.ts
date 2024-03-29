import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { Money } from "./vo/money";
import { FileEntity } from "./file.entity";
import { AddProductDto } from "./dto/add.product.dto";
import { ProductState } from "./vo/product.state";

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

    @Column(type => Money, { prefix: false})
    price: Money;

    @Column()
    quantity: number;

    @OneToMany(type => FileEntity, image => image.id)
    images: FileEntity[];

    @CreateDateColumn({ name: 'create_date' })
    createDate: Date;

    @Column('text')
    state: ProductState

    toEntity(productInfo: AddProductDto) {
        this.productName = productInfo.productName;
        this.category_id = productInfo.category_id;
        this.discription = productInfo.discription;
        this.price = new Money(productInfo.price);
        this.quantity = productInfo.quantity;
        this.state = ProductState.EXIST;

        return this;
    }
}