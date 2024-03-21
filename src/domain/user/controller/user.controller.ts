import { Body, Controller, Post, Res } from '@nestjs/common';
import { JoinUserDto } from '../dto/join.user.dto';
import { UserService } from '../service/user.service';
import { LoginUserInfoDto } from '../dto/login.user.info.dto';
import { ResponseMsg } from 'src/util/response.msg';
import { UserEntity } from '../user.entity';
import { Response } from 'express';

@Controller('user')
export class UserController {

  constructor (private readonly userService: UserService) {}

  @Post('join')
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
