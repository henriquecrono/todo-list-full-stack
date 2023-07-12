import express from 'express';

import { createTask, listTasks } from './controllers/task';

const router = express.Router();

router.get('/task', listTasks);
router.post('/task', createTask);

export default router;
