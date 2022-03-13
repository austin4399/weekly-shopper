import express, {Request, Response, Express} from 'express';

const router = express.Router();

router.get('/test', (req: Request, res: Response) => {
    res.send('test endpoint');
})

router.get('/ingredient', (req: Request, res: Response) => {
    res.send('ingredient endpoint');
});

router.get('/connect', async (req: Request, res: Response) => {
    res.send('connected to mongo');
})

export default router