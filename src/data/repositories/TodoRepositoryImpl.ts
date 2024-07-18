import { TodoRepository } from "../../domain/repositories/TodoRepository";
import { Todo } from "../../domain/models/Todo";
import { TodoAPIDataSource } from "../dataSources/TodoApiDataSource";

export class TodoRepositoryImpl implements TodoRepository {
	private dataSource: TodoAPIDataSource;

	constructor(dataSource: TodoAPIDataSource) {
		this.dataSource = dataSource;
	}

	async getTodos(): Promise<Todo[]> {
		return await this.dataSource.fetchTodos();
	}
}
