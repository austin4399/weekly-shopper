import 'dotenv/config';

export default {

    dbUri: `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.u1kdy.mongodb.net/weekly-shopper-db?retryWrites=true&w=majority`,
    saltWorkFactor: 10,
}