import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";

@Injectable()
export class UserRepository {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    async findByUserId(userId: string): Promise<UserEntity> {
        return await this.userRepository.findOne({
            where: { userId }
        });
    }

    async save(user: UserEntity) {
        return await this.userRepository.save(user);
    }
}