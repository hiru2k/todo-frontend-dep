import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { useEffect } from "react";
import tokenHelper from "./helpers/token.helper";
import { authActions } from "./redux/slices/auth.slice";
import authHelper from "./helpers/auth.helper";

// authenticated routes
const authenticatedRoutes = [
	{
		path: "/",
		element: <TodoPage />,
	},
	{
		path: "/signin",
		element: <Navigate to="/" replace />,
	},
];

// unauthenticated routes
const unauthenticatedRoutes = [
	{
		path: "/signin",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <RegisterPage />,
	},
	{
		path: "/",
		element: <Navigate to="/signin" replace />,
	},
];

const Router = () => {
	const userId = useSelector((s) => s.auth.userId);
	const dispatch = useDispatch();

	useEffect(() => {
		const token = tokenHelper.getToken();
		if (token) {
			authHelper.getLoggedUser().then((user) => {
				dispatch(authActions.setUserId(user.id));
			});
		}
	}, []);

	const router = useMemo(
		() =>
			createBrowserRouter(
				userId ? authenticatedRoutes : unauthenticatedRoutes
			),
		[userId]
	);

	return <RouterProvider router={router} />;
};

export default Router;
