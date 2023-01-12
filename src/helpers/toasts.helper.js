import { toast } from "react-toastify";

const showError = (message) => {
  toast(message, {
    type: "error",
  });
};

const toastsHelper = {
  showError,
};

export default toastsHelper;
