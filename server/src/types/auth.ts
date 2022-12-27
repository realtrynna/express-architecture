import { Request, Response } from "express";
import { User, UserMeta } from "@prisma/client";

import { SignupDto, ResponseUserDto } from "../dtos";

export interface ISignupDto {
    email: string;
    nickname: string;
    password: string;
    introduce: string;
    address: string;
}

/**
 * Auth
 */
export interface IAuthController {
    signup: (req: Request, res: Response) => Promise<Response>;
}

export interface IAuthService {
    signup: (SignupDto: SignupDto) => Promise<ResponseUserDto | null>;
}

export interface IAuthDao {
    findUserById: (userId: number) => Promise<ResponseUserDto | null>;
    findUserByEmail: (email: string) => Promise<Pick<ResponseUserDto, "id" | "email" | "nickname"> | null>;
    signup: (SignupDto: SignupDto) => Promise<ResponseUserDto>;
}
