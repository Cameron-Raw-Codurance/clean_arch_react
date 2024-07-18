import { TodoRepository } from "../repositories/TodoRepository";
import { Todo } from "../models/Todo";

export class GetTodos {
	private todoRepository: TodoRepository;

	constructor(todoRepository: TodoRepository) {
		this.todoRepository = todoRepository;
	}

	async execute(): Promise<Todo[]> {
		return await this.todoRepository.getTodos();
	}
}
