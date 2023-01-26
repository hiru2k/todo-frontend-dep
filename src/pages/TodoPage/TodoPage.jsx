import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import AddEditDialog from "./components/AddEditDialog/AddEditDialog";
import useTodoPageUtils from "./hook";
import ToDo from "./components/ToDo/ToDo";

const BTN_SIDE = 70;

const TodoPage = () => {
	const { userName, openDialog, todos } = useTodoPageUtils();

	return (
		<>
			<Container>
				<Typography variant="h2" textAlign="center" mt={5}>
					Hi {userName}
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
					{todos.map((t) => (
						<ToDo key={t.id} todo={t} />
					))}
				</Box>

				<Button
					onClick={openDialog}
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
