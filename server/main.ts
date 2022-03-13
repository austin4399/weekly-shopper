import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import routesv1 from './api/endpoints/v1/routes';

const server = express();
const dbUri: string = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@dev.ivzgx.mongodb.net/dev`;
mongoose.connect(dbUri)
.then(() => {
    console.log("Database is connected");
})
.catch(err => {
    console.log({ database_error: err });
});
server.use(express.json());
server.use('/v1', routesv1);

export default server