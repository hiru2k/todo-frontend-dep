import axiosApp from "./axios-app.helper";
import routes from "../routes.json";

const createUser = async (user) => {
  const response = await axiosApp.post(routes.users.common, user);
  return response.data;
};

const isUnique = async (props) => {
  const response = await axiosApp.get(routes.users.unique, {
    params: props,
  });
  return response.data;
};

const usersHelper = {
  createUser,
  isUnique,
};

export default usersHelper;
