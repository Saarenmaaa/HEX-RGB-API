import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();

// Enable CORS for all routes under '/api/v1'
app.use('/api/v1', cors());

// Use your defined routes
app.use('/api/v1', routes);

const api_url = "http://localhost:3000/api/v1";
app.listen(3000, () => console.log(
    `Server listening at ${api_url}`
));
