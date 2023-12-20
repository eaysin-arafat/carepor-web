import RequestError from "@/components/core/error/RequestError";
import TableLoader from "@/components/core/loader/TableLoader";
import NotFound from "@/components/core/not-found/NotFound";
import { covaxModalTypes } from "@/constants/modal-types";
import {
  useReadCovaxByClientIdQuery,
  useReadVaccineByClientQuery,
} from "@/features/covax/covax-api";
import { openAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { TypeCovax, TypeImmunizationVaccine } from "@/types/module-types/covax";
import { sortByDate } from "@/utilities/date";
import { PlusCircle } from "react-feather";
import { useDispatch } from "react-redux";
import AdverseEvent from "../cards/AdverseEvent";
import CovaxCard from "../cards/PreAssessmentCard";
import VaccinateCard from "../cards/VaccinateCard";
import AdverseEffectCreate from "../forms/AdverseEffect";
import CovaxCreate from "../forms/PreAssessment";
import VaccinateCreate from "../forms/Vaccinate";

const CovaxIndex = () => {
  const dispatch = useDispatch();
  const [baseData] = useBaseDataCreate();

  // handle create and update form
  const handleCovaxForm = (data?: TypeCovax) => {
    dispatch(
      openAddModal({
        modalId: covaxModalTypes.covaxCreateModal,
        data: data,
      })
    );
  };

  /**
   * @param data // data for edit form params as previous data
   *             // data create form params as null
   */
  const handleVaccinateForm = (data?: TypeImmunizationVaccine) => {
    dispatch(
      openAddModal({
        modalId: covaxModalTypes.vaccinateCreateModal,
        data: data,
      })
    );
  };

  /**
   * @param data // data for edit form params as previous data
   *             // data create form params as null
   */
  const handleAdverseEffectForm = (data?: TypeImmunizationVaccine) => {
    dispatch(
      openAddModal({
        modalId: covaxModalTypes.adverseEffectCreate,
        data: data,
      })
    );
  };

  // Rtk
  //Read client covax/Pre-assessment previous record
  const { data, isLoading, isSuccess, isError } = useReadCovaxByClientIdQuery(
    baseData?.clientId,
    {
      skip: !baseData?.clientId,
    }
  );
  // Convert response array to object
  const clientCovax = isSuccess && Array.isArray(data) ? data[0] : null;

  //Read client vaccines data
  const {
    data: vaccines,
    isLoading: isVaccinesLoading,
    isSuccess: isVaccinesSuccess,
    isError: isVaccinesError,
  } = useReadVaccineByClientQuery(baseData?.clientId, {
    skip: !baseData?.clientId,
  });

  return (
    <div>
      {/* Covax Modal*/}
      <CovaxCreate />
      <VaccinateCreate />
      <AdverseEffectCreate />

      <div className="flex justify-between items-center">
        <h2 className="heading_2">Covax</h2>
        {isSuccess && !isError && !clientCovax && (
          <button
            onClick={() => handleCovaxForm(null)}
            className="main_btn px-5 gap-2"
          >
            <PlusCircle className="" /> New Record
          </button>
        )}
      </div>
      {/* Covax Card  */}
      {isLoading && !isError && (
        <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
          <div className="md:flex justify-between relative">
            <TableLoader />
          </div>
        </div>
      )}
      {isSuccess && !isError && clientCovax && (
        <CovaxCard
          clientCovax={clientCovax}
          handleVaccinateForm={handleVaccinateForm}
          handleCovaxForm={handleCovaxForm}
        />
      )}

      {isVaccinesLoading && !isVaccinesError && (
        <div className="grid md:grid-cols-2 gap-3 mt-5">
          <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
            <TableLoader />
          </div>
          <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
            <TableLoader />
          </div>
        </div>
      )}
      {!isVaccinesLoading && isVaccinesError && (
        <div className="grid md:grid-cols-2 gap-3 mt-5">
          <RequestError />
        </div>
      )}
      {!isVaccinesLoading &&
        !isVaccinesError &&
        Array.isArray(vaccines) &&
        vaccines?.length == 0 && (
          <div className="grid md:grid-cols-2 gap-3 mt-5">
            <NotFound messages="No vaccine record found" />
          </div>
        )}
      {!isVaccinesLoading &&
        !isVaccinesError &&
        Array.isArray(vaccines) &&
        isVaccinesSuccess &&
        vaccines?.length > 0 &&
        sortByDate<TypeImmunizationVaccine>(vaccines).map((vaccine, index) => {
          return (
            <div key={index} className="grid md:grid-cols-2 gap-3 mt-5">
              {/* Vaccine  Card */}
              <VaccinateCard
                vaccine={vaccine}
                handleVaccinateForm={handleVaccinateForm}
              />
              {/* Adverse Event  */}
              <AdverseEvent
                vaccine={vaccine}
                handleAdverseEffectForm={handleAdverseEffectForm}
              />
            </div>
          );
        })}
    </div>
  );
};

export default CovaxIndex;
