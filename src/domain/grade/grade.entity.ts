import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RateCondition } from './vo/rate.condition';

@Entity({ name: 'grade' })
export class GradeEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'grade_name' })
    gradeName: string;
    
    @Column(() => RateCondition, { prefix: false })
    rateCondition: RateCondition;
    
}
