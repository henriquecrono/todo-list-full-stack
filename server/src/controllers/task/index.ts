import { Request, Response } from 'express';

import { list } from '../../models/task';

const listTasks = async (req: Request, res: Response) => {
	const tasks = await list();

	res.status(200).json(tasks);
};

export { listTasks };
