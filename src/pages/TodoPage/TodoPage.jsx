import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import AddEditDialog from "./components/AddEditDialog/AddEditDialog";
import { useDispatch } from "react-redux";
import { addEditDialogActions } from "../../redux/slices/add-edit-dialog.slice";

const BTN_SIDE = 70;

const TodoPage = () => {
	const dispatch = useDispatch();

	return (
		<>
			<Container>
				<Typography variant="h2" textAlign="center" mt={5}>
					Hi Hiru
				</Typography>
				<Typography variant="h4" textAlign="center" mt={3}>
					Check your ToDos List
				</Typography>

				<Box
					sx={{
						mt: 5,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							backgroundColor: "#1C5EC1",
							my: 5,
							width: 500,
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							p: 2,
							borderRadius: 5,
						}}
					>
						<Typography variant="h5" color="white">
							Todo 1
						</Typography>

						<IconButton>
							<EditIcon
								sx={{
									color: "white",
								}}
							/>
						</IconButton>
					</Box>
				</Box>

				<Button
					onClick={() => dispatch(addEditDialogActions.openDialog())}
					sx={{
						backgroundColor: "#1B21AB",
						color: "white",
						fontSize: 30,
						fontWeight: "800",
						width: BTN_SIDE,
						height: BTN_SIDE,
						borderRadius: "50%",
						position: "fixed",
						bottom: 20,
						right: 20,
						transitionDuration: "0.3s",
						":hover": {
							backgroundColor: "#1B21AB",
							boxShadow: "0px 0px 10px 0px #1B21AB",
						},
					}}
				>
					+
				</Button>
			</Container>

			<AddEditDialog />
		</>
	);
};

export default TodoPage;
