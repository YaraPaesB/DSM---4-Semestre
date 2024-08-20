import express, { Request, Response, request } from 'express';
import { Clinic } from '../models/clinics';
import { authorize } from '../middleware/auth';
import mongoose from 'mongoose';
import { createClinic } from '../services/clinics';
import { ErrorApi } from '../errors/error';
import { authorizeAdmin } from '../middleware/authAdmin';
import { authorizeProfessional } from '../middleware/authProfessional';

export const clinicRoutes = express.Router()


clinicRoutes.post('/', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const clinicParams = req.body;

        const clinic = await createClinic(clinicParams);

        res.status(200).json({
            message: "Clinic created",
            data: clinic
        })

        return
    } catch (error:any) {
        
        res.status(error instanceof ErrorApi ? error.getHttpStatus : 400).json({
            message: error instanceof ErrorApi ? error.getMessage : "Can't create this Clinic",
            errors: error.errors ?? undefined
        })
    }
})

clinicRoutes.get('/',  async (req:Request, res:Response) => {
    try {
        const allClinics = await Clinic.find({});
        console.log('oi');
        
        res.status(200).json(allClinics)
    } catch (error) {
        console.log(error);
        
        res.status(404).json({
            message: "Can't find"
        })
    }
})

clinicRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const clinicId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(clinicId)) {
            return res.status(400).json({ message: "Invalid clinic ID format" });
        }

        const clinic = await Clinic.findById(clinicId);

        if (!clinic) {
            return res.status(404).json({
                message: "Clinic not found"
            });
        }

        res.status(200).json(clinic);
    } catch (error) {
        console.error('Error occurred while retrieving the clinic:', error);
        res.status(500).json({
            message: "An error occurred while retrieving the clinic"
        });
    }
});

clinicRoutes.get('/:name/filtro', async (req: Request, res: Response) => {
    try {
        const clinicName = req.params.filtro;


        const clinic = await Clinic.findOne({name: clinicName});
        console.log(clinic);
        
        if (!clinic) {
            return res.status(404).json({
                message: "Clinic not found"
            });
        }

        res.status(200).json(clinic);
    } catch (error) {
        console.error('Error occurred while retrieving the clinic:', error);
        res.status(500).json({
            message: "An error occurred while retrieving the clinic"
        });
    }
});

clinicRoutes.put('/:id', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const clinicId = req.params.id;

        const clinicParams = req.body;
        const updatedClinic = await Clinic.findByIdAndUpdate(clinicId, clinicParams);

        if (!updatedClinic) {
            res.status(404).json({
                message: "Clinic not found"
            })
        }

        res.status(200).json({
            message: "Updated Successfully",
        })
        return
    } catch (error) {
        
        res.status(400).json({
            message: "Can't Update"
        })
    }
})

clinicRoutes.delete('/:id', authorizeAdmin, async (req:Request, res:Response) => {
    try {
        const clinicId = req.params.id; 

        const deleteClinic = await Clinic.deleteOne({_id: clinicId})

        if (!deleteClinic) {
            res.status(404).json({
                message: "Clinic not found"
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
