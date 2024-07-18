import { TodoViewModel } from "../../viewModels/TodoViewModel";
import './styles.module.css';

export const Todo: React.FC<TodoViewModel> = ({ title }) => {
	let checkId = `check-${title}`;
	return (<>
		<div className="todo">
			<input id={checkId} type="checkbox" />
			<label htmlFor={checkId}>{title}</label>
		</div >
	</>)
}
