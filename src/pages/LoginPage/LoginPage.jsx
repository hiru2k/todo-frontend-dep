import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ModernTextField from "../../components/ModernTextField/ModernTextField";
import useLoginPageUtils from "./hook";

const LoginPage = () => {
	const { form, onRegisterButtonClick } = useLoginPageUtils();

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
					Login Here...
				</Typography>

				<ModernTextField
					type="email"
					label="Email"
					fullWidth
					name="email"
					form={form}
				/>
				<ModernTextField
					label="Password"
					type="password"
					fullWidth
					form={form}
					name="password"
				/>

				<Button
					variant="contained"
					sx={{
						mt: 3,
						width: "100%",
					}}
					type="submit"
				>
					Login
				</Button>
				<Button
					type="submit"
					variant="outlined"
					color="secondary"
					sx={{
						width: "100%",
					}}
					onClick={onRegisterButtonClick}
				>
					Register
				</Button>
			</Box>
		</Container>
	);
};

export default LoginPage;
