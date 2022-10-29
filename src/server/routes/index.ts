// create route object
import express from 'express';
// Import routes
import images from './api/images';

const routes = express.Router();

// API route
routes.get('/', (_req: express.Request, res: express.Response): void => {
  res.send('main api route');
});

// Images route
routes.use('/images', images);

export default routes;
