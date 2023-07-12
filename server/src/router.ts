import express from 'express';

import {
	createTask,
	deleteTask,
	listTasks,
	updateTask,
} from './controllers/task';

import { validateTaskBody } from './middleware/task';

const router = express.Router();

router.get('/task', listTasks);
router.post('/task', validateTaskBody, createTask);
router.put('/task/:id', validateTaskBody, updateTask);
router.delete('/task/:id', deleteTask);

export default router;
