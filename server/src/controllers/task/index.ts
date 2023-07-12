import { Request, Response } from 'express';

const listTasks = (req: Request, res: Response) => {
	res.status(200).json({ message: 'route working' });
};

export { listTasks };
