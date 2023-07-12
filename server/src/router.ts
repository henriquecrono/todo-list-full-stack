import express from 'express';

import { createTask, listTasks } from './controllers/task';

import { validateCreateTaskBody } from './middleware/task';

const router = express.Router();

router.get('/task', listTasks);
router.post('/task', validateCreateTaskBody, createTask);

export default router;
