import mongoose from "mongoose";
import { ProfessionalSchema } from "../schemas/professional";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    isProfessional: {
        type: ProfessionalSchema,
        required: false
    }
}, {timestamps: true})

export const User = mongoose.model('users', UserSchema)