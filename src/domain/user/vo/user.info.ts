import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, } from 'typeorm';

export class UserInfo {
  @Column('user_name')
  userName: string;

  @Column('nick_name')
  nickName: string;

  @Column('password')
  password: string;

  @Column('email')
  email: string;

  @Column('modifiedDate')
  @UpdateDateColumn()
  modifiedDate: Date;

  @CreateDateColumn()
  joinDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
