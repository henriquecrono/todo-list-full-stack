import connection from '../connection';

const list = async () => {
	const [tasks] = await connection.execute('SELECT * FROM tasks');
	return tasks;
};

export { list };
