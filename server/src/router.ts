import express from 'express';

import { listTasks } from './controllers/task';

const router = express.Router();

router.get('/task', listTasks);

export default router;
