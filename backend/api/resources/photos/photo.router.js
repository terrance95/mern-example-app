import { Router } from 'express';
import crudControllers from './photo.controller';

const router = Router();

router.route('/').get(crudControllers.getOne);

export default router;
