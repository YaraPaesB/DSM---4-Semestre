import mongoose from "mongoose";
import { AdressSchema } from "./address";

export const ProfessionalSchema = new mongoose.Schema({
    crp: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: AdressSchema,
        required: true
    }
})