import { useEffect, useState } from "react";
import authHelper from "../../helpers/auth.helper";
import { useDispatch, useSelector } from "react-redux";
import { addEditDialogActions } from "../../redux/slices/add-edit-dialog.slice";
import todosHelper from "../../helpers/todos.helper";
import { todosActions } from "../../redux/slices/todos.slice";
import toastsHelper from "../../helpers/toasts.helper";

const useTodoPageUtils = () => {
	const [userName, setUserName] = useState("");
	const dispatch = useDispatch();
	const todos = useSelector((s) => s.todos.todos);

	useEffect(() => {
		loadData().catch((error) => {
			console.error(error);
			toastsHelper.showError("Loading data failed");
		});
	}, []);

	const loadData = async () => {
		const user = await authHelper.getLoggedUser();
		setUserName(user.name);

		const todos = await todosHelper.getTodos();
		dispatch(todosActions.setTodosList(todos));
	};

	return {
		userName,
		openDialog: () => dispatch(addEditDialogActions.openDialog()),
		todos,
	};
};

export default useTodoPageUtils;
