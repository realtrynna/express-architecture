import { Request, Response } from "express";
import { Service } from "typedi";

import { AuthService } from "../services/auth.service";
import { IAuthController } from "../types";
import { SignupDto, SigninDto } from "../dtos";
import { validateDtos } from "../utils";

@Service()
export class AuthController implements IAuthController {
    constructor(private readonly authService: AuthService) {}
    
    signup = async (
        { body }: Request<unknown, unknown, SignupDto>,
        res: Response
    ) => {
        /**
         * throw error => where?
         */
        await validateDtos(new SignupDto(body));

        const signup = await this.authService.signup(body);

        return res.json(signup);
    }

    signin = async (
        { body }: Request<unknown, unknown, SigninDto>,
        res: Response
    ) => {
        await validateDtos(new SigninDto(body));

        const signin = await this.authService.signin(body);

        return res.json(signin);
    }
}