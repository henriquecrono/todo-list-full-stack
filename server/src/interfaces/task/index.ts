export interface ITask {
	id?: number;
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
