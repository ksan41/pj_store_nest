import { Global, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './service/user.service';

@Global()
@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
