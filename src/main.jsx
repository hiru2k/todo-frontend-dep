import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";
import Loader from "./components/Loader/Loader";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />

			<ToastContainer />

			<Loader />
		</Provider>
	</React.StrictMode>
);
