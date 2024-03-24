import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: 'file' })
export class FileEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'product_id' })
    productId: string;

    @ManyToOne(type => ProductEntity, product => product.images, { cascade: true })
    @JoinColumn({ name: 'product_id' })
    product: ProductEntity

    @Column({ name: 'saved_path' })
    savedPath: string;

    @Column({ name: 'file_name' })
    fileName: string;

    @Column({ name: 'saved_name'})
    savedName: string;

    @CreateDateColumn({ name: 'upload_date' })
    uploadDate: Date;
}