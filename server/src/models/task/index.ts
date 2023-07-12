import connection from '../connection';

const listTasks = async () => {
	const tasks = await connection.execute('SELECT * FROM tasks');
	return tasks;
};

export { listTasks };
