import { Router } from 'express';
import { colorsController } from '../controllers/colorsController';

const router: Router = Router();

router.get('/', colorsController.getColors);

export default router;
