import { Service } from "typedi";

import { AuthDao } from "../daos/";
import { SignupDto } from "../dtos";
import { IAuthService } from "../types";

@Service()
export class AuthService implements IAuthService {
    constructor(private readonly authDao: AuthDao) {};

    async signup({
        email,
        nickname,
        password,
        introduce,
        address,
    }: SignupDto) {
        const findUserById = await this.authDao.findUserByEmail(email);

        if (findUserById) return null;

        return await this.authDao.signup({
            email,
            nickname,
            password,
            introduce,
            address,
        });
    }
}