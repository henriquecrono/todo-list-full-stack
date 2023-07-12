import connection from '../connection';

import { ITaskCreate } from '../../interfaces/task';

const listTasks = async () => {
	const [tasks] = await connection.execute('SELECT * FROM tasks');
	return tasks;
};

const createTask = async (task: ITaskCreate) => {
	const { title, status, createdAt } = task;

	const query = `INSERT INTO tasks(title, status, createdAt) VALUES ('${title}', '${status}', '${createdAt}')`;

	const [createdTask] = await connection.execute(query);

	return createdTask;
};

const deleteTask = async (id: string) => {
	const query = `DELETE FROM tasks WHERE id = ${id}`;

	const removedTask = await connection.execute(query);

	return removedTask;
};

const taskModel = {
	listTasks,
	createTask,
	deleteTask,
};

export default taskModel;
