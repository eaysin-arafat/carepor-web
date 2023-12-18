import { RootState } from "@/app/store";
import Card from "@/components/core/card/Card";
import Input from "@/components/core/form-elements/Input";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { clientModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const LinkWithMother = () => {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <div>
      {addModal?.isOpen &&
        addModal?.modalId === clientModalTypes.linkWithMother && (
          <DefaultModal
            title="Link With Mother"
            toggler={closeModal}
            size="5xl"
          >
            {/* <Card
              title="Child's Profile"
              className="bg-whiteColor shadow-none border md:px-5"
              titleClass="text-secondaryColor pt-6"
            > */}
            <div className="md:grid md:grid-cols-2 bg-lightBlueColor px-5 py-3 rounded-lg">
              <h2 className="col-span-full heading_2 text-2xl text-textColor  mb-2">
                Child's Profile
              </h2>
              <DataRow title="First Name" data={"Data"} />
              <DataRow title="Surname" data={"Data"} />
              <DataRow title="Sex" data={"Data"} />
              <DataRow title="Date of Birth" data={"Data"} />
              <DataRow title="NRC" data={"Data"} />
              <DataRow title="NUPN" data={"Data"} />

              <DataRow title="Address" data="Data" />
              <DataRow title="Profile Registration Date" data="Data" />
            </div>
            {/* </Card> */}
            <div className="flex gap-2 items-center ">
              <Input placeholder="Enter NUPN" />
              <button className="bg-primaryColor hover:bg-primaryHoverColor px-5 py-3 h-fit mt-[5px] border border-primaryColor text-whiteColor rounded-lg">
                Search
              </button>
            </div>
            <Card
              title="Mother's Profile"
              className="bg-whiteColor shadow-none border md:px-3"
              titleClass="text-secondaryColor pt-6"
            >
              <div className="md:grid md:grid-cols-2">
                <DataRow title="First Name" data={"Data"} />
                <DataRow title="Surname" data={"Data"} />
                <DataRow title="Sex" data={"Data"} />
                <DataRow title="Date of Birth" data={"Data"} />
                <DataRow title="NRC" data={"Data"} />
                <DataRow title="NUPN" data={"Data"} />

                <DataRow title="Address" data="Data" />
                <DataRow title="Profile Registration Date" data="Data" />
              </div>
            </Card>
          </DefaultModal>
        )}
    </div>
  );
};

export default LinkWithMother;
