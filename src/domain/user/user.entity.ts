import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { UserState } from './vo/user.state';
import { UserInfo } from './vo/user.info';
import { AddressEntity } from './address.entity';
import { PointEntity } from '../point/point.entity';
import { GradeEntity } from '../grade/grade.entity';

@Entity({ name: 'user' })
export class UserEntity {

  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @Column(() => UserInfo, { prefix: false })
  userInfo: UserInfo;

  @OneToOne(type => GradeEntity)
  grade: GradeEntity;

  @OneToMany(type => AddressEntity, address => address.user)
  addresses: AddressEntity[];

  @OneToMany(type => PointEntity, point => point.user)
  points: PointEntity[];

  @Column("text")
  state: UserState;
}
