import { Router } from 'express';
import crudControllers from './controller';

const router = Router();

router
  .route('/')
  .get(crudControllers.getMany)
  .post(crudControllers.createOne);

router
  .route('/:id')
  .get(crudControllers.getOne)
  .put(crudControllers.updateOne);

export default router;
