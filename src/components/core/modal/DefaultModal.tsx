import { cn } from "@/utilities/cn";
import { Modal } from "flowbite-react";

const DefaultModal = ({
  toggler = () => {},
  children,
  title = "Modal title",
  size = "5xl",
  className = "",
}) => {
  return (
    <>
      <Modal
        show={true}
        onClose={toggler}
        size={size}
        style={{ zIndex: "999" }}
        className={cn(className)}
      >
        <Modal.Header className="py-2.5">
          <p className=" text-secondaryColor font-poppins text-xl font-medium">
            {title}
          </p>
        </Modal.Header>
        <Modal.Body className="space-y-6 pt-3">{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default DefaultModal;
