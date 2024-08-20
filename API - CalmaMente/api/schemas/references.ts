import mongoose from "mongoose";

export const ReferenceSchema = new mongoose.Schema({
    link: {
        type: String,
        required:false
    },
    description: {
        type:String,
        required:true
    }
})