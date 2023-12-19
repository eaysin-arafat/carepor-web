import { RootState } from "@/app/store";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { referralModalTypes } from "@/constants/modal-types";
import { useReadFacilitiesQuery } from "@/features/facility/facility-api";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import {
  Referral,
  useDeleteReferralMutation,
  useReadReferralByClientQuery,
} from "@/features/referrals/referrals-api";
import {
  ServicePoint,
  useReadServicePointsQuery,
} from "@/features/service-points/service-points-api";
import useClient from "@/hooks/useClient";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ReferralsCreate from "../create/Create";

const referralType = {
  1: "Internal",
  2: "External",
};

function ReferralsHistory() {
  const [state, setState] = useState(1);
  const [searchQuery, setSearchQuery] = useState({
    facility: "",
    servicePoint: "",
    referralType: "",
    referralReason: "",
  });

  // * Redux
  const { addModal } = useSelector((state: RootState) => state.modal);

  // * Hokes
  const dispatch = useDispatch();
  const client = useClient();

  const { data: referrals } = useReadReferralByClientQuery(client?.oid, {
    skip: !client?.oid,
    refetchOnMountOrArgChange: true,
  });
  const { data: servicePoints } = useReadServicePointsQuery(null);
  const { data: facilities } = useReadFacilitiesQuery(undefined);
  const [deleteReferral, { isSuccess, isError, error, status }] =
    useDeleteReferralMutation();

  console.log("referrals", servicePoints);

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  const handleOpenModal = () => {
    dispatch(
      openAddModal({
        modalId: referralModalTypes.referralCreate,
        data: null,
      })
    );
  };

  const handleDeleteItem = (interactionId: string) => {
    deleteReferral(interactionId);
  };

  const findServicePoint = (oid: number) => {
    return servicePoints?.find((item: ServicePoint) => item.oid === oid)
      ?.description;
  };

  // filtered memoised function for search
  const referralReasonFilter = (item: Referral) => {
    if (!searchQuery?.referralReason) return true;

    return item?.reasonForReferral
      .toLowerCase()
      .includes(searchQuery?.referralReason?.toLowerCase());
  };

  const referralTypeFilter = (item: Referral) => {
    if (!searchQuery?.referralType) return true;
    return item?.referralType === Number(searchQuery?.referralType);
  };

  const servicePointFilter = (item: Referral) => {
    if (!searchQuery?.servicePoint) return true;
    return item?.servicePointId === Number(searchQuery?.servicePoint);
  };

  const facilityFilter = (item: Referral) => {
    if (!searchQuery?.facility) return true;
    return item?.referredFacilityId === Number(searchQuery?.facility);
  };

  // handle Delete api status
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Referral deleted successfully");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error deleting referral"
      );
    }
  }, [isSuccess, isError, status, error]);

  const renderServicePointOptions = () => {
    return servicePoints?.map((servicePoint) => (
      <option key={servicePoint.oid} value={servicePoint.oid}>
        {servicePoint.description}
      </option>
    ));
  };

  const renderFacilityOptions = () => {
    return facilities?.map((facility) => (
      <option key={facility.oid} value={facility.oid}>
        {facility.description}
      </option>
    ));
  };

  return (
    <div>
      {addModal?.modalId === referralModalTypes.referralCreate && (
        <ReferralsCreate toggler={closeModal} />
      )}
      <h1 className="mb-5 text-xl">Pain Scaling Tool</h1>
      <div className="grid grid-cols-5 gap-5 mb-3 items-end">
        <div>
          <Input
            label="Referral Reason"
            name="referralReason"
            value={searchQuery?.referralReason}
            onChange={handleSearchQueryChange}
          />
        </div>
        <div>
          <Select
            label="Referral Type"
            name="referralType"
            value={searchQuery?.referralType}
            onChange={handleSearchQueryChange}
          >
            <option value="1">Internal</option>
            <option value="2">External</option>
          </Select>
        </div>
        <div>
          <Select
            label="Service Points"
            name="servicePoint"
            value={searchQuery?.servicePoint}
            onChange={handleSearchQueryChange}
          >
            {servicePoints?.length > 0 && renderServicePointOptions()}
          </Select>
        </div>
        <div>
          <Select
            label="Facility"
            name="facility"
            value={searchQuery?.facility}
            onChange={handleSearchQueryChange}
          >
            {facilities?.length > 0 && renderFacilityOptions()}
          </Select>
        </div>
        <div>
          <div className="flex items-end justify-end w-full">
            <button
              className="px-2 py-3 bg-buttonBg w-full rounded-full text-center text-white"
              onClick={handleOpenModal}
            >
              Add Encounter
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full">
          <Table>
            <TableHeader
              isAction
              title={[
                {
                  title: "Referral Reason",
                  w: "20%",
                },
                {
                  title: "Referral Type",
                  w: "20%",
                },
                {
                  title: "Referral Service",
                  w: "20%",
                },
                {
                  title: "Facility",
                  w: "20%",
                },
                {
                  title: "Other Facility",
                  w: "20%",
                },
              ]}
            />
            {referrals
              ?.filter(referralReasonFilter)
              ?.filter(referralTypeFilter)
              ?.filter(servicePointFilter)
              ?.filter(facilityFilter)
              ?.map((item, index) => (
                <TableBody
                  index={index}
                  isAction
                  btn={{
                    delete: true,
                  }}
                  handleDeleteItem={() => handleDeleteItem(item?.interactionId)}
                  item={[
                    { title: item.reasonForReferral, w: "20%" },
                    { title: referralType[item.referralType], w: "20%" },
                    {
                      title: item.servicePointId
                        ? findServicePoint(item?.servicePointId)
                        : "--",
                      w: "20%",
                    },
                    { title: item.referredFacility || "--", w: "20%" },
                    { title: item.otherFacility || "--", w: "20%" },
                  ]}
                />
              ))}
          </Table>
          <div className="flex justify-end">
            <CustomPagination
              activePage={50}
              itemsCountPerPage={state}
              setActivePage={setState}
              totalItemsCount={1000}
              setItemPerPage={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralsHistory;
