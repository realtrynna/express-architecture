import {
    IsString,
    IsNumber,
    IsEmail,
    IsBoolean,
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
    @MaxLength(50)
    email: string;
    
    @IsString()
    @MinLength(3)
    @MaxLength(10)
    nickname: string;
    
    password: string;

    // @IsString()
    // @Min(5)
    // @Max(100)
    introduce: string;

    // @IsString()
    // @Min(5)
    // @Max(100)
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