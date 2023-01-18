import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Loader = () => {
	const isLoading = useSelector((state) => {
		return state.loader.loading;
	});

	return (
		<Backdrop
			sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={isLoading}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};

export default Loader;
