import { Router } from "express";
import { createPassword, deletePassword, getPassword, updatePassword } from "../controllers/password.controller.js";

export const passwordRoute = Router()

passwordRoute.route("/").get(getPassword).post(createPassword)
passwordRoute.route("/:id").delete(deletePassword).patch(updatePassword)