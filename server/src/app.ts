import "reflect-metadata";

import express from "express";
import morgan from "morgan";

import { port } from "./config";
import { authRouter } from "./routes";

export async function bootStrap() {
    const app = express();

    app.set("port", port);
    
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/auth", authRouter);

    return app;
}
