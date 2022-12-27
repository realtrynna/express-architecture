import {

} from "class-validator";

import { IResponseUser } from "../../types";

export class ResponseUserDto {
    id: number;
    email: string;
    nickname: string;
    introduce: string;
    address: string;

    constructor({
        id,
        email,
        nickname,
        introduce,
        address
    }: IResponseUser) {
        this.id = id;
        this.email = email;
        this.nickname = nickname;
        this.introduce = introduce;
        this.address = address;
    }
}