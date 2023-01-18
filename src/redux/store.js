import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./slices/loader.slice";

const store = configureStore({
	reducer: {
		loader: loaderSlice.reducer,
	},
});

export default store;
