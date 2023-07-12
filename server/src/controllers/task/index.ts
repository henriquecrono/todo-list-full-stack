import { Request, Response } from 'express';

import { ITaskRequest } from '../../interfaces/task';

import taskModel from '../../models/task';

const taskStatus = {
	pending: 'pending',
	done: 'done',
};

const listTasks = async (_req: Request, res: Response) => {
	const tasks = await taskModel.listTasks();

	return res.status(200).json(tasks);
};

const createTask = async (req: Request, res: Response) => {
	const reqBody: ITaskRequest = req.body;
	const title = reqBody.title;

	const task = {
		title: title,
		status: taskStatus.pending,
		createdAt: new Date().toUTCString(),
	};

	const createdTask = await taskModel.createTask(task);

	return res.status(201).json(createdTask);
};

export { listTasks, createTask };
