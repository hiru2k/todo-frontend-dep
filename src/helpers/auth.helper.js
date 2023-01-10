import axiosApp from "./axios-app.helper";
import routes from "../routes.json";

const login = async (email, password) => {
  const response = await axiosApp.post(routes.auth.login, {
    email,
    password,
  });
  return response.data;
};

const authHelper = {
  login,
};

export default authHelper;
