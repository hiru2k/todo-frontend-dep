import { useEffect, useState } from "react";
import authHelper from "../../helpers/auth.helper";
import { useDispatch, useSelector } from "react-redux";
import { addEditDialogActions } from "../../redux/slices/add-edit-dialog.slice";
import todosHelper from "../../helpers/todos.helper";
import { todosActions } from "../../redux/slices/todos.slice";
import toastsHelper from "../../helpers/toasts.helper";
import { loaderActions } from "../../redux/slices/loader.slice";

const useTodoPageUtils = () => {
	const [userName, setUserName] = useState("");
	const dispatch = useDispatch();
	const todos = useSelector((s) => s.todos.todos);

	useEffect(() => {
		loadInitData().catch((error) => {
			console.error(error);
			toastsHelper.showError("Loading data failed");
		});
	}, []);

	const loadInitData = async () => {
		const user = await authHelper.getLoggedUser();
		setUserName(user.name);

		await loadTodos();
	};

	const loadTodos = async () => {
		const todos = await todosHelper.getTodos();
		dispatch(todosActions.setTodosList(todos));
	};

	const onDelete = async (id) => {
		try {
			dispatch(loaderActions.setLoading(true));

			await todosHelper.deleteTodo(id);

			await loadTodos();

			toastsHelper.showInfo("Todo deleted");
		} catch (error) {
			console.error(error);
			toastsHelper.showError("Deleting todo failed");
		} finally {
			dispatch(loaderActions.setLoading(false));
		}
	};

	const onCheck = async (id) => {
		try {
			dispatch(loaderActions.setLoading(true));

			await todosHelper.toggleTodo(id);

			await loadTodos();
		} catch (error) {
			console.error(error);
			toastsHelper.showError("Toggling todo failed");
		} finally {
			dispatch(loaderActions.setLoading(false));
		}
	};

	return {
		userName,
		openDialog: () => dispatch(addEditDialogActions.openDialog()),
		todos,
		onDelete,
		onCheck,
	};
};

export default useTodoPageUtils;
