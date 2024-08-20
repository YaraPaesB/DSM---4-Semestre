import mongoose from "mongoose";
import { ReferenceSchema } from "../schemas/references";

const ArticleSchema = new mongoose.Schema({
    title: {
        type:String, 
        required:true
    },
    description: {
        type:String,
        required:true
    },
    article: {
        type:String,
        required:true
    },
    references: {
        type:ReferenceSchema,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },

}, {timestamps: true})

export const Articles = mongoose.model('articles', ArticleSchema)