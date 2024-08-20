import express, { Request, Response, request } from 'express';
import { authorizeAdmin } from '../middleware/authAdmin';
import { Articles } from '../models/article';
import { createArticle, deleteArticle, updateArticle } from '../services/article';
import { ErrorApi } from '../errors/error';
import { authorizeProfessional } from '../middleware/authProfessional';


export const articleRoutes = express.Router()

articleRoutes.post('/', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const articleParams = req.body;

        const article = await createArticle(articleParams, req.body.auth._id);

        res.status(200).json(article);
        
        return
    } catch (error:any) {
        res.status(error instanceof ErrorApi ? error.getHttpStatus : 400).json({
            message: error instanceof ErrorApi ? error.getMessage : "Can't create this Article",
            errors: error.errors ?? undefined
        });
        return;
    }
})

articleRoutes.post('/', authorizeProfessional, async (req:Request, res:Response) => {
    try {
        const articleParams = req.body

        const article = await createArticle(articleParams, req.body.auth._id)

        res.status(200).json(article)
        
        return
    } catch (error:any) {
        res.status(error instanceof ErrorApi ? error.getHttpStatus : 400).json({
            message: error instanceof ErrorApi ? error.getMessage : "Can't create this Article",
            errors: error.errors ?? undefined
        })
    }
})

articleRoutes.get('/', async (req:Request, res:Response) => {
    try {
        const allArticles = await Articles.find({})
        
        res.status(200).json(allArticles)
        return
    } catch (error:any) {
        res.status(404).json({
            message: error.message.toString()
        })
    }
})

articleRoutes.put('/:id', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const articleId = req.params.id;

        const articleParams = req.body;

        const updatedArticle = await updateArticle(articleId, articleParams, req.body.auth._id)

        res.status(200).json({
            message:"Updated Successfully",
            data: updatedArticle
        })
        return
    } catch (error:any) {
        res.status(error instanceof ErrorApi ? error.getHttpStatus : 400).json({
            message: error instanceof ErrorApi ? error.getMessage : "Can't update this Article",
            errors: error.errors ?? undefined
        })
    }
})

articleRoutes.put('/:id', authorizeProfessional, async (req:Request, res:Response) => {
    try {
        const articleId = req.params.id;

        const articleParams = req.body;

        const updatedArticle = await updateArticle(articleId, articleParams, req.body.auth._id)

        res.status(200).json({
            message:"Updated Successfully",
            data: updatedArticle
        })
        return
    } catch (error:any) {
        res.status(error instanceof ErrorApi ? error.getHttpStatus : 400).json({
            message: error instanceof ErrorApi ? error.getMessage : "Can't update this Article",
            errors: error.errors ?? undefined
        })
    }
})

articleRoutes.delete('/:id', authorizeProfessional, async (req:Request, res:Response) => {
    try {
        const articleId = req.params.id

        const deletedArticle = await deleteArticle(articleId)

        res.status(200).json({
            message: "Deleted Successfully"
        })
        return
    } catch (error:any) {
        res.status(error instanceof ErrorApi ? error.getHttpStatus : 400).json({
            message: error instanceof ErrorApi ? error.getMessage : "Can't delete this Article",
            errors: error.errors ?? undefined
        })
    }
})

articleRoutes.delete('/:id', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const articleId = req.params.id

        const deletedArticle = await deleteArticle(articleId)

        res.status(200).json({
            message: "Deleted Successfully"
        })
        return
    } catch (error:any) {
        res.status(error instanceof ErrorApi ? error.getHttpStatus : 400).json({
            message: error instanceof ErrorApi ? error.getMessage : "Can't delete this Article",
            errors: error.errors ?? undefined
        })
    }
})
