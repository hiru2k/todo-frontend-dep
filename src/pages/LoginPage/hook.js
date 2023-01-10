import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import authHelper from "../../helpers/auth.helper";

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

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        const data = await authHelper.login(email, password);
        console.log(data);
      } catch (error) {
        if (error.response.status === 401) {
          alert("Invalid email or password");
        }
      }
    },
  });

  return {
    form,
    onRegisterButtonClick: () => navigate("/signup"),
  };
};

export default useLoginPageUtils;
