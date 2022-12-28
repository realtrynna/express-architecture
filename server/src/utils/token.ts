import { sign, verify, SignOptions } from "jsonwebtoken";

import { privateKey, publicKey } from "../config";
import { ITokenPayload } from "../types";

export const generateToken = async (id: number, nickname: string) => {
    const payload: ITokenPayload = {
        id,
        nickname,
    };

    const options: SignOptions = {
        issuer: "realtrynna",
        expiresIn: "5s",
        algorithm: "RS256",
    };

    const token = await sign(
        payload,
        privateKey,
        options,
    );

    return token;
}

export const verifyToken = async (token: string) => {
    /**
     * @practice
     * 검증 실패 시 Return Value => string | JwtPayload(object)
     */
    const verifiedToken = await verify(token, publicKey);

    const verifiedResult = typeof verifiedToken === "object" ? true : false;
    
    return verifiedResult;
}
