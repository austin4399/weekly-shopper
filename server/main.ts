import express from 'express';
import 'dotenv/config'

const server = express();
server.use(express.json());

server.get('/test', (req, res) => {
    res.send(process.env.example);
})

server.post('/test', (req, res) => {
    res.send(req.body);
})

export default server