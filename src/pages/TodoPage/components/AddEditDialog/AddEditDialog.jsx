import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";

const AddEditDialog = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Add ToDo</DialogTitle>
			<DialogContent>
				<DialogContentText>Enter ToDo text</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					fullWidth
					variant="standard"
					sx={{
						width: 500,
					}}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button>Create</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddEditDialog;
