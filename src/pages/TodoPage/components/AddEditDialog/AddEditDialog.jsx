import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import useAddEditDialogUtils from "./hook";

const AddEditDialog = () => {
	const { form, open, onClose, hasError } = useAddEditDialogUtils();

	return (
		<Dialog open={open} onClose={onClose}>
			<Box component="form" onSubmit={form.handleSubmit}>
				<DialogTitle>Add ToDo</DialogTitle>
				<DialogContent>
					<DialogContentText>Enter ToDo text</DialogContentText>

					<TextField
						margin="dense"
						name="text"
						fullWidth
						variant="standard"
						value={form.values.text}
						onChange={form.handleChange}
						onBlur={form.handleBlur}
						error={hasError}
						helperText={hasError ? form.errors.text : null}
						sx={{
							width: 500,
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Cancel</Button>
					<Button type="submit">Create</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default AddEditDialog;
