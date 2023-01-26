import { createSlice } from "@reduxjs/toolkit";

// when user is logged userId is set to user id
// when user is not logged userId is set to null
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
