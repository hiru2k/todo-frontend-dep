import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";

const AddEditDialog = () => {
	return (
		<Dialog open={true}>
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
				<Button>Cancel</Button>
				<Button>Create</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddEditDialog;
