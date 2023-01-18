import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loader.slice";
import authSlice from "./slices/auth.slice";

const store = configureStore({
	reducer: {
		loader: loaderSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
