import mongoose from "mongoose";

const DisorderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
},{timestamps: true}) 

export const Disorder = mongoose.model('disorders', DisorderSchema)