import { Password } from "../models/password.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getPassword = asyncHandler(async (req, res) => {
    const response = await Password.find()
    if (!response) throw new ApiError(404, "Password not found")
    return res.status(201).json(
        new ApiResponse(200, response, "password GET Successfully")
    )
})

export const createPassword = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { site, username, password } = req.body
    if (!site && !username && !password) throw new ApiError(400, "Please provide all fields")
    const response = await Password.create({ site, username, password })
    if (!response) throw new ApiError(404, "Password not created")
    return res.status(201).json(
        new ApiResponse(200, response, "password created Successfully")
    )

})