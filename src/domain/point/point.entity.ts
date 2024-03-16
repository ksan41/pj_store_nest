import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { PointDetail } from './vo/point.detail';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'point' })
export class PointEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => UserEntity, user => user.points, { cascade: true })
  user: UserEntity;

  @Column(() => PointDetail, { prefix: false })
  points: PointDetail;
}
