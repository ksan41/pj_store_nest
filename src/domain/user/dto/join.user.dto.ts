import { IsEmail, Matches, MinLength } from "class-validator";
import { UserEntity } from "../user.entity";
import { UserInfo } from "../vo/user.info";

export class JoinUserDto {
    
    @MinLength(3, { message: "아이디는 3자 이상이어야 합니다." })
    @Matches(/^[a-z]+[a-z0-9]{2}$/, {
        message: "아이디는 영문 소문자로 시작하는 영문 소문자 또는 숫자 3자 이상이어야 합니다."
    })
    userId: string;

    @MinLength(2, {
        message: "이름은 2글자 이상이어야 합니다."
    })
    userName: string;

    @MinLength(2, {
        message: "닉네임는 2글자 이상이어야 합니다."
    })
    nickName: string;

    @Matches(/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/, {
        message: "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상 16자 이하여야 합니다."
    })
    password: string;

    @IsEmail()
    email: string;

}