import express from 'express'
import { mainRouter } from './mainRoute';
import { userAuthenticateRoute } from './authRoute';
import { userRoute } from './userRoute';
import { productRoute } from './productRoute';
import { reviewRoute } from './reviewRoutes';
import { permRoute } from './permissionRoute';
import { contactRoute } from './contactInfoRoute';

export const route = express.Router();

route.use('/', mainRouter);
route.use('/auth', userAuthenticateRoute);
route.use('/user', userRoute);
route.use('/product', productRoute);
route.use('/review', reviewRoute);
route.use('/permission', permRoute);
route.use('/contactInfo', contactRoute);
