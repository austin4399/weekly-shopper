import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import routesv1 from './api/endpoints/v1/routes';
import dayjs from 'dayjs';

const server = express();

const dbUri: string = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@dev.ivzgx.mongodb.net/dev`;

mongoose.connect(dbUri)
    .then(() => {
        console.info(`[${dayjs()}] Connected to MongoDB`);
    }).catch(error => {
        console.error(error);
    });


server.use(express.json());
server.use('/v1', routesv1);

export default server