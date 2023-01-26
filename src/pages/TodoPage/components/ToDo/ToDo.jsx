import { Box, IconButton, Typography } from "@mui/material";
import {
	CheckBoxOutlineBlank,
	Delete as DeleteIcon,
} from "@mui/icons-material";

const ToDo = ({ todo, onDelete }) => {
	return (
		<Box
			sx={{
				backgroundColor: "#1C5EC1",
				my: 2.5,
				width: 500,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				p: 2,
				borderRadius: 5,
			}}
		>
			<Box display="flex" alignItems="center" columnGap={2}>
				<IconButton>
					<CheckBoxOutlineBlank
						sx={{
							color: "white",
						}}
					/>
				</IconButton>
				<Typography variant="h5" color="white">
					{todo.text}
				</Typography>
			</Box>

			<IconButton onClick={() => onDelete(todo.id)}>
				<DeleteIcon
					sx={{
						color: "#ff4444",
					}}
				/>
			</IconButton>
		</Box>
	);
};

export default ToDo;
