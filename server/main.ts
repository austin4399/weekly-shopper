import 'dotenv/config';
import express, {
    Request,
    Response,
    NextFunction
} from 'express';
import mongoose from 'mongoose';
import routesv1 from './api/endpoints/v1/routes';
import dayjs from 'dayjs';

const server = express();

const dbUri: string = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@dev.ivzgx.mongodb.net/dev`;

mongoose.connect(dbUri, { ssl: true, sslValidate: false})
    .then(() => {
        console.log(`[${dayjs()}] Connected to MongoDB`);
    }).catch(error => {
        console.warn(error);
    });
server.use(express.urlencoded({ extended: false }))
server.use((req: Request, res: Response, next: NextFunction) => {
    console.info(`[${req.method}] ${req.url} ${res.statusCode}`);
    next();
    });

server.use(express.json());


server.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
server.use('/v1', routesv1);

export default server
