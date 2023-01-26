import { createSlice } from "@reduxjs/toolkit";

// id dialog is open or not
const initialState = {
	open: false,
};

const addEditDialogSlice = createSlice({
	name: "addEditDialog",
	initialState,
	reducers: {
		openAddEditDialog: (state) => {
			state.open = true;
		},
		closeAddEditDialog: (state) => {
			state.open = false;
		},
	},
});

export const addEditDialogActions = addEditDialogSlice.actions;

export default addEditDialogSlice;
