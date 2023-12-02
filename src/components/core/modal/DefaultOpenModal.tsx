import { ZIndex } from "@/constants/z-index";
import { X } from "react-feather";

const DefaultOpenModal = ({
  children,
  className,
  title = "Modal Title",
  handler = () => {},
  Z_index = 99,
}) => {
  return (
    <>
      <div className={`modal modal-open`} style={{ zIndex: ZIndex.modal }}>
        <div
          className={` ${className} modal-box border-b px-2 md:px-6 `}
          style={{
            background: "var(--body)",
          }}
        >
          <div
            className="border-b flex items-center justify-between sticky py-3 -mt-[10px] -top-[24px] gap-2"
            style={{
              background: "var(--body)",
              zIndex: Z_index,
            }}
          >
            <h3 className="text-lg font-bold ps-2 w-[90%]">{title}</h3>
            <div className="w-[10%]">
              <label
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mt-2 "
                onClick={handler}
              >
                <X size={18} color="var(--text)" />
              </label>
            </div>
          </div>
          <div className="modal_body ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DefaultOpenModal;
