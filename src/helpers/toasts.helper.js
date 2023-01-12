import { toast } from "react-toastify";

const showError = (message) =>
  toast(message, {
    type: "error",
  });

const showInfo = (msg) => toast(msg, { type: "info" });

const toastsHelper = {
  showError,
  showInfo,
};

export default toastsHelper;
