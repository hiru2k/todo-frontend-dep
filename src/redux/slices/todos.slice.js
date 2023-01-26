import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setTodosList: (state, action) => {
			state.todos = action.payload;
		},
	},
});

export const todosActions = todosSlice.actions;

export default todosSlice;
