import { useEffect, useState } from "react";
import authHelper from "../../helpers/auth.helper";

const useTodoPageUtils = () => {
	const [userName, setUserName] = useState("");

	useEffect(() => {
		authHelper.getLoggedUser().then((user) => setUserName(user.name));
	}, []);

	return {
		userName,
	};
};

export default useTodoPageUtils;
