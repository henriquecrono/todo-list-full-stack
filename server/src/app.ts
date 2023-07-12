import express, { Express, json } from 'express';

import router from './router';

const app: Express = express();

app.use(json());
app.use(router);

export default app;
