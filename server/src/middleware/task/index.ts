import { Request, Response, NextFunction } from 'express';

import { ITaskRequest } from '../../interfaces/task';

const validateTaskBody = (req: Request, res: Response, next: NextFunction) => {
	const reqBody: ITaskRequest = req.body;
	const title = reqBody.title;

	if (!title) {
		return res.status(400).json({
			message: 'Field "title" is required',
		});
	}

	next();
};

export { validateTaskBody };
