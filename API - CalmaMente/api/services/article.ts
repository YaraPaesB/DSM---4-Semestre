import mongoose from "mongoose"
import { ErrorApi } from "../errors/error"
import { Articles } from "../models/article"



export const createArticle = async (articleParams:any, userId: mongoose.Types.ObjectId) => {
    try {
        const articleExists = await Articles.findOne({title: articleParams.title})

        if (articleExists) {
           throw new ErrorApi(400, 'Article already exists')
        }

        const article = await Articles.create({...articleParams, author: userId})

        return article;
    } catch (error:any) {
        throw error;
    }
}  

export const updateArticle = async (articleId:any, articleParams:any, author: mongoose.Types.ObjectId) => {
    try {
        const updatedArticle = await Articles.findOneAndUpdate({_id: articleId, author}, articleParams)

        if (!updatedArticle) {
            throw new ErrorApi(404, "Article not found")
        }

        return
    } catch (error:any) {
        throw error;
    }
}

export const deleteArticle = async (articleId:any) => {
    try {
        const deletedArticle = await Articles.deleteOne({_id: articleId})

        if (!deletedArticle) {
            throw new ErrorApi(404, 'Article not found')
        }
        return
    } catch (error:any) {
        throw error;
    }
}