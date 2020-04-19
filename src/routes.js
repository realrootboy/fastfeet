import { Router } from 'express';

const routes = new Router();

//routes and middlewares
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

routes.post('/session', SessionController.store);

routes.use('/recipients', authMiddleware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

//end routes and middlewares

export default routes;