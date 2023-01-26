import axiosApp from "./axios-app.helper";
import routes from "../routes.json";

const createTodo = async (todo) => {
	const response = await axiosApp.post(routes.todos.common, todo);
	return response.data;
};

const getTodos = async () => {
	const response = await axiosApp.get(routes.todos.common);
	return response.data;
};

const toggleTodo = async (id) => {
	await axiosApp.put(`${routes.todos.common}/${id}`);
};

const deleteTodo = async (id) => {
	await axiosApp.delete(`${routes.todos.common}/${id}`);
};

const todosHelper = {
	createTodo,
	getTodos,
	toggleTodo,
	deleteTodo,
};

export default todosHelper;
