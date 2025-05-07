import { Router } from "express";
import { createPassword, getPassword } from "../controllers/password.controller.js";

export const passwordRoute = Router()

passwordRoute.route("/").get(getPassword).post(createPassword)