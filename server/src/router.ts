import express from 'express';

import { createTask, deleteTask, listTasks } from './controllers/task';

import { validateCreateTaskBody } from './middleware/task';

const router = express.Router();

router.get('/task', listTasks);
router.post('/task', validateCreateTaskBody, createTask);
router.delete('/task/:id', deleteTask);

export default router;
