import { useState, useEffect } from "react";
import { GetTodos } from "../../domain/useCases/GetTodos";
import { TodoRepositoryImpl } from "../../data/repositories/TodoRepositoryImpl";
import { TodoAPIDataSource } from "../../data/dataSources/TodoApiDataSource";
import { Todo } from "../../domain/models/Todo";

export const useTodoListViewModel = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const useCase = new GetTodos(new TodoRepositoryImpl(new TodoAPIDataSource()));
			const result = await useCase.execute();
			setTodos(result);
		};

		fetchTodos();
	}, []);

	return { todos };
};
