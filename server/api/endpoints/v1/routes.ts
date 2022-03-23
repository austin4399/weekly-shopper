import express, {Request, Response, Express} from 'express';
import validateResource from '../../middleware/validateResource';
import { createRecipeSchema } from '../../schema/recipe.schema';
import { createRecipeHandler } from '../../controller/recipe.controller'

const router = express.Router();

router.get('healthcheck', (req: Request, res: Response) => res.sendStatus(200));

router.get('/test', (req: Request, res: Response) => {
    res.send('test endpoint');
})

router.get('/ingredient', (req: Request, res: Response) => {
    res.send('ingredient endpoint');
});

router.get('/connect', async (req: Request, res: Response) => {
    res.send('connected to mongo');
})

router.post(
    '/recipe',
    validateResource(createRecipeSchema),
    createRecipeHandler
    )

export default router