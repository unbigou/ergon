import express from 'express';
import bodyParser from 'body-parser';
import { route } from './routes';
import { PrismaClient } from '@prisma/client';
import { handleError } from './middlewares/handleError';
import { verifyApiKey } from './middlewares/verifyApiKey';
import config from './config/config';
import cors from 'cors'

const prisma = new PrismaClient();
prisma.$connect()

const app = express();

app.use(bodyParser.json())

app.use(cors(config.cors))
app.use(verifyApiKey)

app.use('/', route)

app.use(handleError)
app.options('*', cors(config.cors))

app.listen(Number(config.api.port), () => {
  console.log('🚀 Backend Rodando...')
})