import 'dotenv/config';

export default {
    port: '80',
    host: 'localhost',
    dbUri: `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.u1kdy.mongodb.net/typescript-api-demo?retryWrites=true&w=majority`,
    saltWorkFactor: 10,
}