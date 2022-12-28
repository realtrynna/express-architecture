import { Service } from "typedi";

import { AuthDao } from "../daos/";
import { SignupDto, SigninDto } from "../dtos";
import { IAuthService } from "../types";
import { 
    generateHashPassword,
    compareHashedPassword,
    generateToken,
} from "../utils";

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

        password = await generateHashPassword(password);

        const signupUser = await this.authDao.signup({
            email,
            nickname,
            password,
            introduce,
            address,
        });

        return signupUser;
    }

    async signin({ email, password }: SigninDto) {
        const user = await this.authDao.findPasswordByEmail(email);
        const existPassword = await compareHashedPassword(
            password,
            user!.password
        );
        
        if (!user || !existPassword) return null;

        const accessToken = await generateToken(user.id, user.nickname);

        return accessToken;
    }
}