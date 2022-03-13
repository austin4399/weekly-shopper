import express from 'express';
import 'dotenv/config'
import routesv1 from './api/endpoints/v1/routes';

const server = express();

server.use(express.json());

server.use('/v1', routesv1);

export default server