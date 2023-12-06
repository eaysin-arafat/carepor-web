import { Modal } from "flowbite-react";
import Textarea from "../form-elements/textarea";

const DefaultOpenModal = ({ isShow = false, toggler = () => {} }) => {
  return (
    <>
      <Modal
        show={isShow}
        onClose={toggler}
        size="5xl"
        style={{ zIndex: "999999" }}
      >
        <Modal.Header className="py-3">
          <h1 className=" text-[#1E0E62] font-poppins text-2xl">
            Presenting Complaints
          </h1>
        </Modal.Header>
        <Modal.Body className="space-y-6">
          <div className="space-y-4">
            <Textarea
              label="Presenting Complaints"
              placeholder="Enter Present Complaints"
            />
            <Textarea
              label="History of Presenting Complaints"
              placeholder="Enter Present Complaints"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button className="flex gap-2 items-center  border border-gray-400 px-7 rounded-full text-lg">
              {/* <XCircle size={16} /> */}
              Cancel
            </button>
            <button className="flex gap-2 items-center border border-[#1890FF] bg-[#1890FF] py-2.5  px-7 rounded-full">
              {/* <PlusCircle size={16} />{" "} */}
              <span className="inline-block text-lg text-white">Save</span>
            </button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer className="justify-end py-3"></Modal.Footer> */}
      </Modal>
    </>
  );
};

export default DefaultOpenModal;
