import { RootState } from "@/app/store";
import { useReadCountriesQuery } from "@/features/country/country-api";
import {
  useCheckUserMobileQuery,
  useCheckUserNRCQuery,
  useUpdateUserAccountMutation,
} from "@/features/user-accounts/user-accounts-api";
import { FormSubmitEventType } from "@/types/htmlEvents";
import {
  ContactInfoType,
  ErrorsType,
  PersonalInfoType,
} from "@/types/user-accounts";
import { TypeValidation } from "@/utilities/type-valdation";
import { contactInfoValidator } from "@/validation-models/user-accounts/contact-info-validator";
import { userAccountPersonalInfoValidator } from "@/validation-models/user-accounts/personal-info-validator";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialPersonalInfo = {
  firstName: "",
  surname: "",
  dob: null,
  sex: "",
  designation: "",
};

const initialContactInfo = {
  contactAddress: "",
  countryCode: "",
  cellphone: "",
};

function useEditUserAccounts() {
  const { user } = useSelector((state: RootState) => state.authentication);

  //  nrc state
  const [nrc, setNrc] = useState(user?.nrc || "");
  const [noNRC, setNoNRC] = useState(false);
  const [errors, setErrors] = useState<ErrorsType>({});
  const [isCellphoneValid, setIsCellphoneValid] = useState(true);
  const [isNRCValid, setIsNRCValid] = useState(true);
  const [stateCount, setStateCount] = useState(1);

  // personal info states
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    firstName: user?.firstName || "",
    surname: user?.surname || "",
    dob: user?.dob || null,
    sex: user?.sex ? user?.sex.toString() : "",
    designation: user?.designation || "",
  });

  // contact info states
  const [contactInfo, setContactInfo] = useState<ContactInfoType>({
    contactAddress: user?.contactAddress || "",
    countryCode: user?.countryCode || "",
    cellphone: user?.cellphone || "",
  });

  // api hooks
  const { data: countries } = useReadCountriesQuery(undefined);

  // check cellphone api hook
  const { data: cellphoneData } = useCheckUserMobileQuery(
    {
      userMobile: contactInfo.cellphone,
      countryCode: contactInfo.countryCode,
    },
    {
      skip: !contactInfo.cellphone || !contactInfo.countryCode,
      refetchOnMountOrArgChange: true,
    }
  );

  //   check nrc api hook
  const {
    isSuccess: nrcIsSuccess,
    isError: nrcIsError,
    status: nrcStatus,
  } = useCheckUserNRCQuery(
    { nrc },
    {
      skip: !nrc || nrc === "000000/00/0" || noNRC,
      refetchOnMountOrArgChange: true,
    }
  );

  // registration api hook
  const [editUser, { isLoading, isSuccess, isError, error, status }] =
    useUpdateUserAccountMutation();

  //  variable and hooks
  const disabledBackButton = stateCount === 1;
  const navigate = useNavigate();
  const stepTitle = [
    "Personal <br /> Information",
    "Contact <br /> Information",
  ];

  // handle personal information changes
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // handle contact information change
  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  // handle set no nrc
  const handleSetNoNRC = () => {
    if (!noNRC) setNrc("000000/00/0");
    else setNrc("");
    setNoNRC(!noNRC);
    setErrors((prev) => ({ ...prev, nrc: "" }));
  };

  // handle cellphone change
  const handleCellphoneChange = (value: string) => {
    if (value === "" || TypeValidation.isOnlyNumber(value))
      setContactInfo((prev) => ({ ...prev, cellphone: value }));
    setErrors((prev) => ({ ...prev, cellphone: "" }));
  };

  // handle nrc change
  const handleNrcChange = debounce((nrc) => {
    if (nrc === "") {
      setIsNRCValid(true);
    }
    setNrc(nrc);
    setErrors((prev) => ({ ...prev, nrc: "" }));
  }, 800);

  // handle back
  const handleBack = () => {
    setStateCount((prev: number) => Math.max(prev - 1, 1));
  };

  // handle next
  const handleNext = () => {
    if (stateCount === 1) {
      const { error: personalInfoValidationError, isValid } =
        userAccountPersonalInfoValidator({ ...personalInfo, nrc });
      if (!isValid) return setErrors(personalInfoValidationError);
      if (!isNRCValid) return;
    }

    setStateCount((next: number) => Math.min(next + 1, stepTitle.length));
  };

  // handle form submission
  const handleSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();

    const data = {
      ...user,
      ...personalInfo,
      ...contactInfo,
      nrc,
    };

    const { error: contactInfoValidationError, isValid } =
      contactInfoValidator(contactInfo);
    if (!isValid) return setErrors(contactInfoValidationError);

    // call registration api
    editUser({
      key: user?.oid,
      body: data,
    });
  };

  // show success or fail status
  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Account updated successfully.");
      setPersonalInfo(initialPersonalInfo);
      setContactInfo(initialContactInfo);
      setNrc("");
      setNoNRC(false);
      setErrors({});
      navigate("/client-search");
    }

    if (isError && status === "rejected") {
      if ("data" in error) {
        toast.dismiss();
        toast.error(
          typeof error?.data === "string"
            ? error?.data
            : "Error updating account"
        );
      }
    }
  }, [isSuccess, isError, status, error, navigate]);

  // check if cellphone is valid
  useEffect(() => {
    if (cellphoneData) {
      setIsCellphoneValid(false);
    }

    setIsCellphoneValid(true);
  }, [cellphoneData]);

  // check if nrc is valid
  useEffect(() => {
    if (nrcIsSuccess && nrcStatus === "fulfilled" && nrc !== user?.nrc) {
      return setIsNRCValid(false);
    }
    if ((nrcIsError && nrcStatus === "rejected") || nrc === user?.nrc) {
      return setIsNRCValid(true);
    }
  }, [nrcIsSuccess, nrcIsError, nrcStatus, nrc, user?.nrc]);

  // return values
  return {
    personalInfo,
    contactInfo,
    countries,
    nrc,
    noNRC,
    errors,
    isCellphoneValid,
    isNRCValid,
    handlePersonalInfoChange,
    handleContactInfoChange,
    handleCellphoneChange,
    handleSubmit,
    handleNrcChange,
    handleSetNoNRC,
    stepTitle,
    stateCount,
    handleBack,
    handleNext,
    disabledBackButton,
    isLoading,
  };
}

export default useEditUserAccounts;
