import { Router } from "express";
import { Container } from "typedi";

import { AuthController } from "../controllers/auth.controller";
import { asyncHandler } from "../utils";

const authRouter = Router();
const authController = Container.get(AuthController);

authRouter.post("/signup", asyncHandler(authController.signup));
authRouter.post("/signin", asyncHandler(authController.signin));

export { authRouter }