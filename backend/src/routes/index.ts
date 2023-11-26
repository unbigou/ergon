import express from 'express'
import { mainRouter } from './mainRoute';
import { userAuthenticateRoute } from './authRoute';
import { userRoute } from './userRoute';
import { productRoute } from './productRoute';
import { notificationRoute } from './notificationTest';

export const route = express.Router();

route.use('/', mainRouter);
route.use('/auth', userAuthenticateRoute);
route.use('/user', userRoute);
route.use('/product', productRoute);
route.use('/test', notificationRoute);