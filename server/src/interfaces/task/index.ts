export interface ITask {
	id: string;
	title: string;
	status: string;
	createdAt: string;
}

export interface ITaskCreate {
	title: string;
	status: string;
	createdAt: string;
}

export interface ITaskRequest {
	title: string;
}

export interface ITaskUpdate {
	id: string;
	title: string;
	status: string;
}
