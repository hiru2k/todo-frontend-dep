import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import { useSelector } from "react-redux";
import { useMemo } from "react";

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
