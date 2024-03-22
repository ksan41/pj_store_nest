import { Injectable } from '@nestjs/common';
import { JoinUserDto } from '../dto/join.user.dto';
import { UserEntity } from '../user.entity';
import { LoginUserInfoDto } from '../dto/login.user.info.dto';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository,
        ) {}

    async isValidUserId(userId: string): Promise<boolean> {
        return await this.userRepository.findByUserId(userId) !== null ? true: false;
    }

    async joinUser(joinDto: JoinUserDto) {
        const isDuplicated = (await this.isValidUserId(joinDto.userId)).valueOf();
        if (isDuplicated) return;

        const userEntity:UserEntity = new UserEntity().toEntity(joinDto);
        return this.userRepository.save(userEntity);
    }

    async login(loginInfo: LoginUserInfoDto) {
        const loginUser = await this.userRepository.findByUserId(loginInfo.userId);
        const isPwdCompare = await bcrypt.compare(loginInfo.password, loginUser.userInfo.password);
        if (isPwdCompare) {
        }
        return;
    }

}
