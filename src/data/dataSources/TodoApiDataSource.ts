import { Todo } from "../../domain/models/Todo";

export class TodoAPIDataSource {
	async fetchTodos(): Promise<Todo[]> {
		// Simulate an API call
		return [
			{ id: "1", title: "Learn TypeScript", completed: false },
			{ id: "2", title: "Build a React App", completed: false },
		];
	}
}
