import { Password } from "../models/password.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getPassword = asyncHandler(async (req, res) => {
    try {
        const response = await Password.find()
        if (!response) throw new ApiError(404, "Password not found")
        return res.status(201).json(
            new ApiResponse(200, response, "password GET Successfully")
        )
    } catch (error) {
        console.log(error)
        throw new ApiError(500, "Internal server error", [], error.stack)
        
    }
})

export const createPassword = asyncHandler(async (req, res) => {
    try {
        const { site, username, password } = req.body
        if (!site && !username && !password) throw new ApiError(400, "Please provide all fields")
        const response = await Password.create({ site, username, password })
        if (!response) throw new ApiError(404, "Password not created")
        return res.status(201).json(
            new ApiResponse(201, null, "password created Successfully")
        )
    } catch (error) {
        console.log(error)
        throw new ApiError(500, "Internal server error", [], error.stack)
        
    }

})

export const deletePassword = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        if (!id) throw new ApiError(400, "Please provide all fields")
        const response = await Password.findByIdAndDelete(id)
        if (!response) throw new ApiError(404, "Password not deleted")
        return res.status(201).json(
            new ApiResponse(201, null, "password deleted Successfully")
        )
    } catch (error) {
        console.log(error)
        throw new ApiError(500, "Internal server error", [], error.stack)
        
    }

})

export const updatePassword = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const {_id,...data}=req.body
        if (!id) throw new ApiError(400, "Please provide all fields")
        const response = await Password.findByIdAndUpdate(id, data, { new: true,runValidators: true  })
        if (!response) throw new ApiError(404, "Password not updated")
        return res.status(201).json(
            new ApiResponse(201, null, "password updated Successfully")
        )
    } catch (error) {
        console.log(error)
        throw new ApiError(500, "Internal server error", [], error.stack)
        
    }

})