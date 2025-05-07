import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import { ApiError } from "../utils/ApiError.js";

export const ConnectDB = async () => {
    try {
        const connection=await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log("MongoDB connected successfully  !! DB HOST :", connection.connection.host);
        
    } catch (error) {
        throw new ApiError(500, "Database connection failed", [], error.stack)
    }
}
