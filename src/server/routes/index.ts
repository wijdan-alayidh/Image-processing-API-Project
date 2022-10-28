// create route object
import express from 'express';
// Import routes
import images from './api/images';

const routes = express.Router();

// API route
routes.get('/', (req, res) => {
  res.send('main api route');
});

// Images route
routes.use('/images', images);

export default routes;
