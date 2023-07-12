import connection from '../connection';

import { ITaskCreate } from '../../interfaces/task';

const list = async () => {
	const [tasks] = await connection.execute('SELECT * FROM tasks');
	return tasks;
};

const create = async (task: ITaskCreate) => {
	const { title, status, createdAt } = task;

	const query = `INSERT INTO tasks(title, status, createdAt) VALUES ('${title}', '${status}', '${createdAt}')`;

	const [createdTask] = await connection.execute(query);

	return createdTask;
};

export { list, create };
