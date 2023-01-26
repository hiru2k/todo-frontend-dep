import { useEffect, useState } from "react";
import authHelper from "../../helpers/auth.helper";
import { useDispatch } from "react-redux";
import { addEditDialogActions } from "../../redux/slices/add-edit-dialog.slice";

const useTodoPageUtils = () => {
	const [userName, setUserName] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		authHelper.getLoggedUser().then((user) => setUserName(user.name));
	}, []);

	return {
		userName,
		openDialog: () => dispatch(addEditDialogActions.openDialog()),
	};
};

export default useTodoPageUtils;
