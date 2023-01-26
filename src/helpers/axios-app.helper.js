import axios from "axios";
import tokenHelper from "./token.helper";

const axiosApp = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosApp.interceptors.request.use(
	(config) => {
		const token = tokenHelper.getToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default axiosApp;
