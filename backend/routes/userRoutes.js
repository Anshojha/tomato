import express from "express";

import userController from "../controller/userController.js";

const userRouter = express.Router();
const { loginUser, registerUser } = userController;

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

export default userRouter;