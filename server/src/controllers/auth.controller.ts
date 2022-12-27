import { Request, Response } from "express";
import { Service } from "typedi";

import { AuthService } from "../services/auth.service";
import { IAuthController } from "../types";
import { SignupDto } from "../dtos";
import { validateDtos } from "../utils";

@Service()
export class AuthController implements IAuthController {
    constructor(private readonly authService: AuthService) {}
    
    signup = async (
        { body }: Request<unknown, unknown, SignupDto>,
        res: Response
    ) => {
        await validateDtos(new SignupDto(body));

        const signup = await this.authService.signup(body);

        console.log("서비스에서 넘어온 에러", signup);

        return res.end();
    }
}