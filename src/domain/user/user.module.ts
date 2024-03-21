import { Global, Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserRepository } from './repository/user.repository';

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository]
})
export class UserModule {}
