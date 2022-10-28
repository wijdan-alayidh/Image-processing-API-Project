// Main imports to run express server

import express from 'express';
import routes from './routes/index';
import bodyParser from 'body-parser';

const app = express();

// Port number
const port = 3000;

// Middlewaiers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('build'));
app.use('src/client/images', express.static('images'));

app.use('/api', routes);

// Run server
app.listen(port, () => {
  console.log(`your server work correctly on port ${port}`);
});

export default app;
