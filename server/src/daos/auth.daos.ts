import { Service } from "typedi";
import { User } from "@prisma/client";

import { Prisma } from "../db/prisma";
import { SignupDto } from "../dtos";
import { IAuthDao } from "../types";

@Service()
export class AuthDao implements IAuthDao {
    private readonly prisma;

    constructor() {this.prisma = Prisma};

    async findUserById(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                email: true,
                nickname: true,
                userMeats: {
                    select: {
                        introduce: true,
                        address: true,
                    }
                }
            },
        });

        /**
         * No User
         */
        if (!user?.userMeats) return null;

        return {
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            introduce: user.userMeats.introduce,
            address: user.userMeats.address,
        };
    }

    async findUserByEmail(email: string) {
        return await this.prisma.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                email: true,
                nickname: true,
            },
        });
    }

    async signup({
        email,
        nickname,
        password,
        introduce,
        address
    }: SignupDto) {
        return await this.prisma.$transaction(async (prisma) => {
            const user = await prisma.user.create({
                data: {
                    email,
                    nickname,
                    password,     
                },
                select: {
                    id: true,
                    email: true,
                    nickname: true,
                },
            });

            const userMeta = await prisma.userMeta.create({
                data: {
                    introduce,
                    address,
                    userId: user.id,
                },
                select: {
                    introduce: true,
                    address: true,
                },
            });

            return {
                id: user.id,
                email: user.email,
                nickname: user.nickname,
                introduce: userMeta.introduce,
                address: userMeta.address,
            };
        });
    }
}