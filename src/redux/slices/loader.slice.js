import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
};

const loaderSlice = createSlice({
	name: "loader",
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const loaderActions = loaderSlice.actions;

export default loaderSlice;
