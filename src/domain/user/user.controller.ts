import { Body, Controller, Post } from '@nestjs/common';
import { JoinUserDto } from './dto/join.user.dto';
import { UserService } from './service/user.service';

@Controller('user')
export class UserController {

  constructor (private readonly userService: UserService) {}

  @Post('join')
  joinUser(@Body() joinInfo: JoinUserDto) {
    return;
  }
  
}
