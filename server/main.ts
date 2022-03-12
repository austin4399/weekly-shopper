import express from 'express';

const server = express();
server.use(express.json());

server.get('/test', (req, res) => {
    res.send('Hello World');
})

server.post('/test', (req, res) => {
    res.send(req.body);
})

export default server