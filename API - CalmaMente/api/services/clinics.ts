import { Clinic } from "../models/clinics"
import { ErrorApi } from "../errors/error"

export const createClinic = async (clinicParams: any) => {
    try {
        
        const clinicAlreadyExists = await Clinic.findOne({email: clinicParams.email})

        if (clinicAlreadyExists) {
            throw new ErrorApi(400, "Clinic Already Exists");
        }

        const clinic = await Clinic.create(clinicParams)

        return clinic;
    } catch (error:any) {
        throw error;
    }
}