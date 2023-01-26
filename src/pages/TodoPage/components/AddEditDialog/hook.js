import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loaderActions } from "../../../../redux/slices/loader.slice";
import todosHelper from "../../../../helpers/todos.helper";
import toastsHelper from "../../../../helpers/toasts.helper";

const initialValues = {
	text: "",
};

const validationSchema = Yup.object().shape({
	text: Yup.string().required("Text is required"),
});

const useAddEditDialogUtils = ({ onClose }) => {
	const dispatch = useDispatch();

	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values) => {
			dispatch(loaderActions.setLoading(true));
			try {
				await todosHelper.createTodo(values);
				toastsHelper.showInfo("ToDo created");
				onClose();
			} catch (error) {
				console.log(error);
				toastsHelper.showError("Creating ToDo failed");
			} finally {
				dispatch(loaderActions.setLoading(false));
			}
		},
	});

	return { form };
};

export default useAddEditDialogUtils;
