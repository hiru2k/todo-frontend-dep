import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userId: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUserId: (state, action) => {
			state.userId = action.payload;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
