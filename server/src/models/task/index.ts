import connection from '../connection';

import { ITaskCreate, ITaskUpdate } from '../../interfaces/task';

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

const updateTask = async (task: ITaskUpdate) => {
	const { id, title, status } = task;
	const query = `UPDATE tasks SET title = '${title}', status = '${status}' WHERE id = ${id}`;

	const updatedTask = await connection.execute(query);

	return updatedTask;
};

const taskModel = {
	listTasks,
	createTask,
	deleteTask,
	updateTask,
};

export default taskModel;
