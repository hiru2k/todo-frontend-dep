import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loaderActions } from "../../../../redux/slices/loader.slice";
import todosHelper from "../../../../helpers/todos.helper";
import toastsHelper from "../../../../helpers/toasts.helper";
import { addEditDialogActions } from "../../../../redux/slices/add-edit-dialog.slice";
import { todosActions } from "../../../../redux/slices/todos.slice";

const initialValues = {
	text: "",
};

const validationSchema = Yup.object().shape({
	text: Yup.string().required("Text is required"),
});

const useAddEditDialogUtils = () => {
	const isDialogOpen = useSelector((s) => s.addEditDialog.open);
	const dispatch = useDispatch();

	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values) => {
			dispatch(loaderActions.setLoading(true));
			try {
				await todosHelper.createTodo(values);
				await refreshTodosList();

				toastsHelper.showInfo("ToDo created");
				closeDialog();
			} catch (error) {
				console.log(error);
				toastsHelper.showError("Creating ToDo failed");
			} finally {
				dispatch(loaderActions.setLoading(false));
			}
		},
	});

	const closeDialog = () => {
		dispatch(addEditDialogActions.closeDialog());
		form.resetForm();
	};

	const refreshTodosList = async () => {
		const todos = await todosHelper.getTodos();
		dispatch(todosActions.setTodosList(todos));
	};

	return {
		form,
		open: isDialogOpen,
		onClose: closeDialog,
		hasError: form.touched.text && Boolean(form.errors.text),
	};
};

export default useAddEditDialogUtils;
