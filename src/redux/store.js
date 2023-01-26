import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loader.slice";
import authSlice from "./slices/auth.slice";
import addEditDialogSlice from "./slices/add-edit-dialog.slice";

const store = configureStore({
	reducer: {
		loader: loaderSlice.reducer,
		auth: authSlice.reducer,
		addEditDialog: addEditDialogSlice.reducer,
	},
});

export default store;
