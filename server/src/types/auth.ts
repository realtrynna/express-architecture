import { Request, Response } from "express";

import { 
    SignupDto, 
    ResponseUserDto,
    SigninDto,
} from "../dtos";

export interface ISignupDto {
    email: string;
    nickname: string;
    password: string;
    introduce: string;
    address: string;
}

export interface ISigninDto {
    email: string;
    password: string;
}

export interface ITokenPayload {
    id: number;
    nickname: string;
}

/**
 * Auth
 */
export interface IAuthController {
    signup: (req: Request, res: Response) => Promise<Response>;
    signin: (req: Request, res: Response) => Promise<Response>;
}

export interface IAuthService {
    signup: (signupDto: SignupDto) => Promise<ResponseUserDto | null>;
    signin: (signinDto: SigninDto) => Promise<string | null>;
}

export interface IAuthDao {
    findUserById: (userId: number) => Promise<ResponseUserDto | null>;
    findUserByEmail: (email: string) => Promise<Pick<ResponseUserDto, "id" | "email" | "nickname"> | null>;
    findPasswordByEmail: (email: string) => Promise<any>;
    signup: (signupDto: SignupDto) => Promise<ResponseUserDto>;
}
