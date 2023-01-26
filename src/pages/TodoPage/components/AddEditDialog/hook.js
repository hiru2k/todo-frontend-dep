import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
	text: "",
};

const validationSchema = Yup.object().shape({
	text: Yup.string().required("Text is required"),
});

const useAddEditDialogUtils = () => {
	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return { form };
};

export default useAddEditDialogUtils;
