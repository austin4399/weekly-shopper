import express from 'express';

const server = express();

server.get('/test', (req, res) => {
    res.send('Hello World');
})

export default server