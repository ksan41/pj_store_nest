import { Body, Controller, Post, Res } from '@nestjs/common';
import { JoinUserDto } from '../domain/user/dto/join.user.dto';
import { UserService } from '../domain/user/service/user.service';
import { LoginUserInfoDto } from '../domain/user/dto/login.user.info.dto';
import { ResponseMsg } from 'src/util/response.msg';
import { UserEntity } from '../domain/user/user.entity';
import { Response } from 'express';

@Controller('user')
export class UserController {

  constructor (private readonly userService: UserService) {}

  @Post('')
  async joinUser(@Body() joinInfo: JoinUserDto): Promise<ResponseMsg> {
      let res: ResponseMsg = new ResponseMsg();
      const result = await this.userService.joinUser(joinInfo);
      if (result != null) {
        res.success();
      } else {
        res.failed(400, "아이디가 중복되었습니다.");
      }
      return res;
  }
  
}
