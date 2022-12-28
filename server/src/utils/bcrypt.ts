import bcrypt, { hash } from "bcrypt";

import { saltRounds } from "../config";

export const generateHashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(Number(saltRounds));
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
};

export const compareHashedPassword = async (
    password: string,
    encryptedPassword: string
) => {
    /**
     * @hash => 단방향
     * @encrypt => 양방향
     */
    const compare = await bcrypt.compare(password, encryptedPassword);
    
    if (compare) return true;
    else return false;
}