import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import usersHelper from "../../helpers/users.helper";
import toastsHelper from "../../helpers/toasts.helper";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../redux/slices/loader.slice";

const initialValues = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required")
		.test("is-unique", "Email is already taken", async (value) => {
			if (!value) return true;

			const isUnique = await usersHelper.isUnique({ email: value });
			return isUnique;
		}),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Confirm password is required"),
});

const useRegisterPageUtils = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values) => {
			dispatch(loaderActions.setLoading(true));
			const { confirmPassword, ...userProps } = values;
			const user = await usersHelper.createUser(userProps);
			console.log(user);
			dispatch(loaderActions.setLoading(false));

			toastsHelper.showInfo("Your account has been created successfully");
			navigate("/signin");
		},
	});

	return {
		form,
		onSigninClick: () => navigate("/signin"),
	};
};

export default useRegisterPageUtils;
