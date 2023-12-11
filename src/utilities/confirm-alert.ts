import Swal from "sweetalert2";

export type AlertType = {
  title?: string;
  text?: string;
  message?: string;
  icon?: "success" | "error" | "warning" | "question";
  showCancelButton?: boolean;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  confirmButtonText?: string;
  handler?: () => void;
};

class ConfirmAlert {
  static deleteConfirm({
    handler = () => {},
    confirmButtonText = "Ok",
    showCancelButton = true,
    title = "Are you sure?",
    text,
  }: AlertType) {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton,
      confirmButtonText,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        handler();
      }
    });
  }
  static approveConfirm({
    handler = () => {},
    confirmButtonText = "Ok",
    showCancelButton = true,
    title = "Approve Request",
    text,
  }: AlertType) {
    return Swal.fire({
      title,
      text,
      icon: "question",
      showCancelButton,
      confirmButtonText,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        handler();
      }
    });
  }
}

export default ConfirmAlert;

// const defaultAlertValue = {
//   showCancelButton: false,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Ok",
// };

// export const AlertMessage = ({
//   title,
//   text,
//   icon,
//   showCancelButton = false,
//   confirmedHandler = () => {},
//   confirmButtonText,
// }) => {
//   Swal.fire({
//     ...defaultAlertValue,
//     title,
//     text,
//     icon,
//     showCancelButton,
//     confirmButtonText,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       confirmedHandler();
//     }
//   });
// };
