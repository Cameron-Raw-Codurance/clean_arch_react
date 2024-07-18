import { useTodoListViewModel } from "../../viewModels/TodoListViewModel";
import { Todo } from "../Todo/Todo";
import './styles.module.css';

const TodoList: React.FC = () => {
	const { todos } = useTodoListViewModel();

	return (
		<div>
			<h1>Todo List</h1>
			<ul>
				{todos.map(todo => (
					<Todo key={todo.id} title={todo.title} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
