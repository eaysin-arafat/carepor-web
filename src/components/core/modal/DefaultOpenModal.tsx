import { Modal } from "flowbite-react";

const DefaultOpenModal = ({
  isShow = false,
  toggler = () => {},
  children,
  title = "Presenting Complaints",
}) => {
  return (
    <>
      <Modal
        show={isShow}
        onClose={toggler}
        size="5xl"
        style={{ zIndex: "99999" }}
        className="custom__modal"
      >
        <Modal.Header className="py-2.5">
          <h1 className=" text-[#1E0E62] font-poppins text-xl font-medium">
            {title}
          </h1>
        </Modal.Header>
        <Modal.Body className="space-y-6 pt-3">{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default DefaultOpenModal;
