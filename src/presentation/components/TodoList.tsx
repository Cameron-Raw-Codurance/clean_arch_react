import React from "react";
import { useTodoListViewModel } from "../viewModels/TodoListViewModel";

const TodoList: React.FC = () => {
	const { todos } = useTodoListViewModel();

	return (
		<div>
			<h1>Todo List</h1>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
