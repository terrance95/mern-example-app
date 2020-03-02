import { Router } from 'express';
import crudControllers from './photo.controller';

const router = Router();

router
  .route('/')
  .get(crudControllers.getMany)
  .post(crudControllers.createOne);

router.route('/:id').get(crudControllers.getOne);

export default router;
