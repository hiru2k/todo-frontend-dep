import axiosApp from "./axios-app.helper";
import routes from "../routes.json";

const login = async (email, password) => {
	const response = await axiosApp.post(routes.auth.login, {
		email,
		password,
	});
	return response.data;
};

const getLoggedUser = async () => {
	const response = await axiosApp.get(routes.auth.common);
	return response.data;
};

const authHelper = {
	login,
	getLoggedUser,
};

export default authHelper;
