import mongoose from "mongoose";
import bcrypt from "bcrypt";

const passwordSchema = new mongoose.Schema({
    site: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    refreshToken: {
        type: String
    }
},
    { timestamps: true }
)

// passwordSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next()
//     this.password = await bcrypt.hash(this.password, 10)
//     next()
// })


// passwordSchema.methods.comparePassword = async function (password){
//     return await bcrypt.compare(password, this.password)
// }

export const Password = mongoose.model("password", passwordSchema)