import express from 'express';
import { authRoutes } from './auth';
import { clinicRoutes } from './clinics';
import { disorderRoutes } from './disorders';
import { articleRoutes } from './article';

export const routes = express.Router()

routes.use('/auth', authRoutes)

routes.use('/clinics', clinicRoutes)

routes.use('/disorders', disorderRoutes)

routes.use('/articles', articleRoutes)