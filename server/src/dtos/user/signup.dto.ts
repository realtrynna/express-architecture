import {
    IsString,
    IsEmail,
    IsNotEmpty,
    MinLength,
    MaxLength,
    IsAlphanumeric,
} from "class-validator";

import { ISignupDto } from "../../types";

export class SignupDto {
    @IsEmail()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(60)
    email: string;
    
    @IsString()
    @MinLength(3)
    @MaxLength(10)
    nickname: string;
    
    @IsAlphanumeric()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    password: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    introduce: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    address: string;

    constructor({
        email,
        nickname,
        password,
        introduce,
        address
    }: ISignupDto) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.introduce = introduce;
        this.address = address;
    }
}