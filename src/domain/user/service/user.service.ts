import { Injectable } from '@nestjs/common';
import { JoinUserDto } from '../dto/join.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';
import { LoginUserInfoDto } from '../dto/login.user.info.dto';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcrypt';
import { UserState } from '../vo/user.state';
import { UserInfo } from '../vo/user.info';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository,
        ) {}

    async isValidUserId(userId: string): Promise<boolean> {
        return await this.userRepository.findByUserId(userId) !== null ? true: false;
    }

    private saveUser(joinDto: JoinUserDto) {
        const userEntity: UserEntity = new UserEntity();
        userEntity.userId = joinDto.userId;
        userEntity.state = UserState.ENABLE;

        const userInfo: UserInfo = new UserInfo();
        userInfo.userName = joinDto.userName;
        userInfo.password = joinDto.password;
        userInfo.nickName = joinDto.nickName;
        userInfo.email = joinDto.email;

        userEntity.userInfo = userInfo;
        return this.userRepository.save(userEntity);
    }

    async joinUser(joinDto: JoinUserDto) {
        const isValidId = (await this.isValidUserId(joinDto.userId)).valueOf();
        if (isValidId) return;
        return this.saveUser(joinDto);
    }

}
