import express from 'express';

import { listTasks } from './controllers/task';

const router = express.Router();

router.get('/tasks', listTasks);

export default router;
