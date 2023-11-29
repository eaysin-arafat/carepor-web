import Swal from "sweetalert2";

class Alert {
  static success(message: string) {
    return Swal.fire({
      icon: "success",
      text: message,
    });
  }

  static error(message: string) {
    return Swal.fire({
      icon: "error",
      title: message,
    });
  }

  static warning(message: string) {
    return Swal.fire({
      icon: "warning",
      title: message,
    });
  }

  static confirm(message: string) {
    return Swal.fire({
      icon: "question",
      title: message,
    });
  }
}

export default Alert;

// type defaultType = {
//   icon?: string;
//   showCancelButton?: boolean;
//   confirmButtonColor?: string;
//   cancelButtonColor?: string;
//   confirmButtonText?: string;
// };
export type AlertType = {
  title: string;
  text?: string;
  message?: string;
  icon: "success" | "error" | "warning" | "question";
  showCancelButton?: boolean;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  confirmButtonText?: string;
};

const defaultAlertValue = {
  showCancelButton: false,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
};

export const AlertMessage = ({
  title,
  text,
  icon,
  showCancelButton = false,
  confirmedHandler = () => {},
}) => {
  Swal.fire({
    ...defaultAlertValue,
    title,
    text,
    icon,
    showCancelButton,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    // confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      confirmedHandler();
    }
  });
};
