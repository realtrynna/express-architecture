import {
    IsString,
    IsEmail,
    IsNotEmpty,
    IsAlphanumeric,
    MaxLength,
    MinLength
} from "class-validator";

import { ISigninDto } from "../../types";

export class SigninDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    password: string;

    constructor({
        email,
        password
    }: ISigninDto) {
        this.email = email;
        this.password = password;
    }
}