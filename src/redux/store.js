import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loader.slice";
import authSlice from "./slices/auth.slice";
import addEditDialogSlice from "./slices/add-edit-dialog.slice";
import todosSlice from "./slices/todos.slice";

const store = configureStore({
	reducer: {
		loader: loaderSlice.reducer,
		auth: authSlice.reducer,
		addEditDialog: addEditDialogSlice.reducer,
		todos: todosSlice.reducer,
	},
});

export default store;
