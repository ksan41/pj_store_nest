import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { PointDetail } from './vo/point.detail';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'point' })
export class PointEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(type => UserEntity, user => user.points, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column(() => PointDetail, { prefix: false })
  points: PointDetail;

}
