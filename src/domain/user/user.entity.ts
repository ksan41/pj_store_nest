import { BeforeInsert, Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { UserState } from './vo/user.state';
import { UserInfo } from './vo/user.info';
import { AddressEntity } from './address.entity';
import { PointEntity } from '../point/point.entity';
import { GradeEntity } from '../grade/grade.entity';
import * as bcrypt from 'bcrypt';

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

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    const encryptPass = await bcrypt.hash(this.userInfo.password, salt);
    this.userInfo.password = encryptPass;
  }

}
