import { createSlice } from "@reduxjs/toolkit";

// id dialog is open or not
const initialState = {
	open: false,
};

const addEditDialogSlice = createSlice({
	name: "addEditDialog",
	initialState,
	reducers: {
		openDialog: (state) => {
			state.open = true;
		},
		closeDialog: (state) => {
			state.open = false;
		},
	},
});

export const addEditDialogActions = addEditDialogSlice.actions;

export default addEditDialogSlice;
