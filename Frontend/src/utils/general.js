import { toast } from "react-toastify";

export const defaultTodo = {
  _id: "",
  title: "",
  description: "",
  isCompleted: false,
};

export const CustomSuccessAlert = (message) => {
  toast.success(message, {
    position: "top-left",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const CustomWarningAlert = (message) => {
  toast.warning(message, {
    position: "top-left",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const CustomErrorAlert = (message) => {
  toast.error(message, {
    position: "top-left",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
