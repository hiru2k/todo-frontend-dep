import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	Container,
	TextField,
	Typography,
} from "@mui/material";
import ModernTextField from "../../components/ModernTextField/ModernTextField";
import useRegisterPageUtils from "./hook";

const RegisterPage = () => {
	const { form, onSigninClick } = useRegisterPageUtils();

	return (
		<Container
			sx={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				component="form"
				onSubmit={form.handleSubmit}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					rowGap: 3,
					width: 400,
				}}
			>
				<Typography mb={5} variant="h3">
					Register Here...
				</Typography>

				<ModernTextField
					label="Name"
					fullWidth
					name="name"
					form={form}
				/>
				<ModernTextField
					label="Email"
					fullWidth
					name="email"
					form={form}
				/>
				<ModernTextField
					label="Password"
					type="password"
					fullWidth
					name="password"
					form={form}
				/>
				<ModernTextField
					label="Confirm Password"
					type="password"
					fullWidth
					name="confirmPassword"
					form={form}
				/>

				<Button
					type="submit"
					variant="contained"
					sx={{
						mt: 3,
						width: "100%",
					}}
				>
					Register
				</Button>
				<Button
					type="submit"
					variant="outlined"
					color="secondary"
					sx={{
						width: "100%",
					}}
					onClick={onSigninClick}
				>
					Login
				</Button>
			</Box>
		</Container>
	);
};

export default RegisterPage;
