import express, { Request, Response, request } from 'express';
import mongoose from 'mongoose';
import { Disorder } from '../models/disorder';
import { authorizeAdmin } from '../middleware/authAdmin';

export const disorderRoutes = express.Router()

disorderRoutes.post('/', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const disorderParams = req.body;

        const disorderExists = await Disorder.findOne({name: req.body.name})

        if (disorderExists) {
            res.status(400).json({
                message: "This Disorder already exists"
            })
        }

        const disorder = await Disorder.create(disorderParams)

        res.status(200).json({
            success: true,
            message: "Disorder Created",
            data: disorder
        })

    } catch (error:any) {
        res.status(400).json({
            message: error.message.toString()
        })
    }
})

disorderRoutes.get('/', async (req:Request, res:Response) => {
    try {
        const allDisorders = await Disorder.find({})
        
        res.status(200).json(allDisorders)
    } catch (error:any) {
        res.status(404).json({
            message: error.message.toString()
        })
    }
})

disorderRoutes.put('/:id', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const disorderId = req.params.id;

        const disorderParams = req.body;
        
        const updatedDisorder = await Disorder.findByIdAndUpdate(disorderId, disorderParams)

        if (!updatedDisorder) {
            res.status(404).json({
                message: "Disorder not found"
            })
        }

        res.status(200).json({
            message: "Disorder updated"
        })
        return
    } catch (error:any) {
        res.status(400).json({
            message: error.message.toString()
        })
    }
    
})

disorderRoutes.delete('/:id', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const disorderId = req.params.id;
        
        const deleteDisorder = await Disorder.deleteOne({_id: disorderId})

        if (!deleteDisorder) {
            res.status(404).json({
                message: "Disorder not found"
            })
        }

        res.status(200).json({
            message: "Deleted Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Can't delete"
        })
    }
})



