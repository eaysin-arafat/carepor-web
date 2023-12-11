import { closeAddModal } from "@/features/modal/modal-slice";
import { cn } from "@/utilities/cn";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  addModalId?: string;
  editModalId?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  title,
  addModalId,
  editModalId,
}) => {
  const dispatch = useDispatch();
  const { addModal, editModal } = useSelector((store: any) => store.modal);

  useEffect(() => {
    const handleModalOpen = () => {
      document.body.classList.add("modal-open");
    };

    const handleModalClose = () => {
      document.body.classList.remove("modal-open");
    };

    if (
      addModal?.modalId === addModalId ||
      editModal?.modalId === editModalId
    ) {
      handleModalOpen();
    } else {
      handleModalClose();
    }

    return () => {
      handleModalClose();
    };
  }, [addModal?.modalId, editModal?.modalId, addModalId, editModalId]);

  const isModalId =
    addModal?.modalId === addModalId || editModal?.modalId === editModalId;

  return (
    <>
      {isModalId && (
        <div className={`modal-container z-[9999]`}>
          <div
            className={cn("modal  overflow-y-auto max-h-[90%] ", className)}
          >
            <div
              style={{zIndex: "99"}}
              className={`flex sticky top-0 bg-whiteBgColor ${
                title
                  ? "border-b border-borderColor justify-between "
                  : "justify-end pb-0"
              } px-5 py-2.5 `}
            >
              {title && (
                <h2 className={`text-xl sm:text-2xl font-semibold text-secondaryColor`}>
                  {title}
                </h2>
              )}
              <button
                type="button"
                className={` flex items-center justify-center border border-borderColor hover:bg-bodyColor w-8 h-8 rounded-full`}
                onClick={() => {
                  dispatch(closeAddModal());
                }}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="px-5 py-2 overflow-auto">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
