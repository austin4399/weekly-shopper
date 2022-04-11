import express, {Request, Response, Express} from 'express';
import validateResource from '../../middleware/validateResource';
import { createRecipeSchema } from '../../schema/recipe.schema';
import { createRecipeHandler, findRecipeHander } from '../../controller/recipe.controller'
import { findRandomRecipeTest } from '../../service/recipe.service';

const router = express.Router();

router.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

router.get('/recipe', findRecipeHander)

router.post(
    '/recipe',
    validateResource(createRecipeSchema),
    createRecipeHandler
    )
router.get('/random', async (req: Request, res: Response) =>{
   const randomRecipe = await findRandomRecipeTest(1);
   res.send(randomRecipe);
})
export default router
