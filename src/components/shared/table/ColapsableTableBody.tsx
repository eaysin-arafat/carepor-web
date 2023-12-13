import React from "react";

type Props = {
  children?: React.ReactNode;
  addResult?: boolean;
  addResultHandler?: () => void;
  btnOutlineHandler?: () => void;
  viewResultHandler?: () => void;
};

function CollapsibleTableBody({
  children,
  addResult,
  addResultHandler,
}: Props) {
  return (
    <div className="flex-col text-xs">
      <details className="overflow-hidden">
        <summary className="bg-grey-light cursor-pointer p-3.5">
          <h2 className="font-normal inline leading-none ps-5">12-12-2023</h2>
          <div className="font-normal inline leading-none text-base float-right ">
            <div className="flex gap-5 items-center">
              {addResult && (
                <button
                  onClick={addResultHandler}
                  className="border rounded-full hover:bg-primaryColor hover:text-white border-primaryColor text-primaryColor flex items-center justify-center  px-3 text-[13px] py-1 -mt-1"
                >
                  Add Result
                </button>
              )}
            </div>
          </div>
        </summary>
        <div className="border-y border-borderColor">{children}</div>
      </details>
    </div>
  );
}

export default CollapsibleTableBody;
