import { Todo } from "../models/Todo";

export interface TodoRepository {
	getTodos(): Promise<Todo[]>;
}
