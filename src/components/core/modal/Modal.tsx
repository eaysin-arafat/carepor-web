import { RootState } from "@/app/store";
import { closeAddModal, closeEditModal } from "@/features/modal/modal-slice";
import { cn } from "@/utilities/cn";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClass?: string;
  addModalId?: string;
  editModalId?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  title,
  titleClass = "",
  addModalId,
  editModalId,
}) => {
  const dispatch = useDispatch();
  const { addModal, editModal } = useSelector(
    (store: RootState) => store.modal
  );

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

  const handleModalClose = () => {
    if (editModal?.modalId) {
      dispatch(closeEditModal());
    } else {
      dispatch(closeAddModal());
    }
  };

  return (
    <>
      {isModalId && (
        <div className={`modal-container z-[9999]`}>
          <div className={cn("modal  overflow-y-auto max-h-[90%] ", className)}>
            <div
              style={{ zIndex: "99" }}
              className={`flex sticky top-0 bg-whiteBgColor ${
                title
                  ? "border-b border-borderColor justify-between "
                  : "justify-end pb-0"
              } px-5 py-2.5 `}
            >
              {title && (
                <h2
                  className={
                    `text-xl sm:text-2xl font-semibold text-secondaryColor` +
                    " " +
                    titleClass
                  }
                >
                  {title}
                </h2>
              )}
              <button
                type="button"
                className={` flex items-center justify-center border border-borderColor hover:bg-bodyColor w-8 h-8 rounded-full`}
                onClick={() => {
                  handleModalClose();
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
