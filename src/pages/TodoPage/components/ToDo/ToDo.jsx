import { Box, IconButton, Typography } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";

const ToDo = ({ todo }) => {
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
			<Typography variant="h5" color="white">
				{todo.text}
			</Typography>

			<IconButton>
				<EditIcon
					sx={{
						color: "white",
					}}
				/>
			</IconButton>
		</Box>
	);
};

export default ToDo;
