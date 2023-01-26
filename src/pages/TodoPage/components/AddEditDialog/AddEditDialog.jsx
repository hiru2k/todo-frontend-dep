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

const AddEditDialog = ({ open, onClose }) => {
	const { form } = useAddEditDialogUtils();

	const hasError = form.touched.text && Boolean(form.errors.text);

	return (
		<Dialog open={open} onClose={onClose}>
			<Box component="form" onSubmit={form.handleSubmit}>
				<DialogTitle>Add ToDo</DialogTitle>
				<DialogContent>
					<DialogContentText>Enter ToDo text</DialogContentText>

					<TextField
						autoFocus
						margin="dense"
						id="text"
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
