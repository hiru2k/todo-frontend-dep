import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import authHelper from "../../helpers/auth.helper";
import toastsHelper from "../../helpers/toasts.helper";
import tokenHelper from "../../helpers/token.helper";
import { useState } from "react";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
	password: Yup.string().required("Password is required"),
});

const useLoginPageUtils = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values) => {
			try {
				setLoading(true);
				const { email, password } = values;
				const data = await authHelper.login(email, password);
				tokenHelper.addToken(data);
				navigate("/");
			} catch (error) {
				if (error.response.status === 401) {
					toastsHelper.showError("Invalid email or password");
				}
			} finally {
				setLoading(false);
			}
		},
	});

	return {
		form,
		onRegisterButtonClick: () => navigate("/signup"),
		loading,
	};
};

export default useLoginPageUtils;
