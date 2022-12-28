import fs from "fs";
import { join } from "path";

export const port = process.env.PORT || 1000;
export const saltRounds = process.env.SALT_ROUNDS || 12;
export const passphrase = process.env.PASSPHRASE || "941103";

/**
 * @OpenSSL
 */
export const privateKey = {
    key: fs.readFileSync(join(__dirname, "../../private.pem")).toString("utf-8"),
    passphrase,
};
export const publicKey = fs.readFileSync(join(__dirname, "../../public.pem")).toString("utf-8");



