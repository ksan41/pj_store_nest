import { Entity } from 'typeorm';
import { UserState } from './vo/user.state';
import { UserInfo } from './vo/user.info';
import { Address } from './vo/address';
import { PointEntity } from '../point/point.entity';
import { GradeEntity } from '../grade/grade.entity';

@Entity({ name: 'user' })
export class UserEntity {
  userId: string;
  userInfo: UserInfo;
  grade: GradeEntity;
  addresses: Array<Address>;
  points: Array<PointEntity>;
  state: UserState;
}
