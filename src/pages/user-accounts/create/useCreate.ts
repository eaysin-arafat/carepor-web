import { useReadCountriesQuery } from "@/features/country/country-api";
import {
  useCheckUserMobileQuery,
  useCheckUserNRCQuery,
  useCheckUserNameQuery,
  useCreateUserAccountMutation,
} from "@/features/user-accounts/user-accounts-api";
import { URLRequestFacility } from "@/routers/application-router";
import { FormSubmitEventType } from "@/types/htmlEvents";
import {
  ContactInfoType,
  ErrorsType,
  LoginInfoType,
  PersonalInfoType,
} from "@/types/user-accounts";
import { cookieManager } from "@/utilities/cookie-manager";
import { TypeValidation } from "@/utilities/type-valdation";
import { contactInfoValidator } from "@/validation-models/user-accounts/contact-info-validator";
import { loginInfoValidator } from "@/validation-models/user-accounts/login-info-validator";
import { userAccountPersonalInfoValidator } from "@/validation-models/user-accounts/personal-info-validator";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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

const initialLoginInfo = {
  password: "",
  confirmPassword: "",
};

function useUserRegistration() {
  //  nrc state
  const [nrc, setNrc] = useState("");
  const [noNRC, setNoNRC] = useState(false);
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState<ErrorsType>({});
  const [isCellphoneValid, setIsCellphoneValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isNRCValid, setIsNRCValid] = useState(true);
  const [stateCount, setStateCount] = useState(1);

  // personal info states
  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfoType>(initialPersonalInfo);

  // contact info states
  const [contactInfo, setContactInfo] =
    useState<ContactInfoType>(initialContactInfo);

  // login info states
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>(initialLoginInfo);

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

  /// check username api hook
  const { data: usernameData } = useCheckUserNameQuery(username, {
    skip: !username,
    refetchOnMountOrArgChange: true,
  });

  // check nrc api hook
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
  const [registration, { data: user, status, isSuccess, isError, error }] =
    useCreateUserAccountMutation();

  //  variable and hooks
  const navigate = useNavigate();
  const disabledBackButton = stateCount === 1;
  const stepTitle = [
    "Personal <br /> Information",
    "Contact <br /> Information",
    "Login <br /> Information",
  ];

  // set nrc based on noNRC
  useEffect(() => {
    if (noNRC) {
      setNrc("000000/00/0");
    } else {
      setNrc("");
    }
  }, [noNRC]);

  // handle personal information changes
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // handle username change
  const handleUsernameChange = debounce((value) => {
    if (value === "") {
      setIsUsernameValid(true);
    }
    setUsername(value);
    setErrors((prev) => ({ ...prev, username: "" }));
  }, 800);

  // handle contact information change
  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  // handle login information changes
  const handleLoginInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // handle set no nrc
  const handleSetNoNRC = () => {
    if (!noNRC) setNrc("000000/00/0");
    else setNrc("");
    setNoNRC(!noNRC);
    setErrors((prev) => ({ ...prev, nrc: "" }));
  };

  // handle cellphone change
  const handleCellphoneChange = debounce((value) => {
    if (value === "" || TypeValidation.isOnlyNumber(value))
      setContactInfo((prev) => ({ ...prev, cellphone: value }));
  }, 400);

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

    if (stateCount === 2) {
      const { error: contactInfoValidationError, isValid } =
        contactInfoValidator(contactInfo);
      if (!isValid) return setErrors(contactInfoValidationError);
    }

    if (stateCount === 3) {
      const { errors: loginInfoValidationError, isValid } = loginInfoValidator({
        ...loginInfo,
        username,
      });
      if (!isValid) return setErrors(loginInfoValidationError);
    }
    setStateCount((next: number) => Math.min(next + 1, stepTitle.length));
  };

  // handle form submission
  const handleSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();

    const data = {
      ...personalInfo,
      ...contactInfo,
      ...loginInfo,
      nrc,
      username: username,
      // cellphone: cellphone,
      // userMobile: cellphone,
    };

    // call registration api
    registration(data);
  };

  // show success or fail status
  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Registration successful");
      setPersonalInfo(initialPersonalInfo);
      setContactInfo(initialContactInfo);
      setLoginInfo(initialLoginInfo);
      setNrc("");
      setUsername("");
      setNoNRC(false);

      cookieManager.saveCookie("carepro_token", user?.oid, {
        expires: 1,
      });

      navigate(URLRequestFacility());
    }

    if (isError && status === "rejected") {
      if ("data" in error) {
        toast.dismiss();
        toast.error(
          typeof error?.data === "string"
            ? error?.data
            : "Error creating account"
        );
      }
    }
  }, [isSuccess, isError, status, error, navigate, user?.oid]);

  // check if cellphone is valid
  useEffect(() => {
    if (cellphoneData) {
      setIsCellphoneValid(false);
    }

    setIsCellphoneValid(true);
  }, [cellphoneData]);

  // check if username is valid
  useEffect(() => {
    if (usernameData) {
      return setIsUsernameValid(false);
    }
    return setIsUsernameValid(true);
  }, [usernameData]);

  // check if nrc is valid
  useEffect(() => {
    if (nrcIsSuccess && nrcStatus === "fulfilled") {
      return setIsNRCValid(false);
    }
    if (nrcIsError && nrcStatus === "rejected") {
      return setIsNRCValid(true);
    }
  }, [nrcIsSuccess, nrcIsError, nrcStatus]);

  // return values
  return {
    personalInfo,
    contactInfo,
    loginInfo,
    countries,
    nrc,
    noNRC,
    username,
    errors,
    isCellphoneValid,
    isUsernameValid,
    isNRCValid,
    handlePersonalInfoChange,
    handleContactInfoChange,
    handleLoginInfoChange,
    handleCellphoneChange,
    handleSubmit,
    handleUsernameChange,
    handleNrcChange,
    handleSetNoNRC,
    stepTitle,
    stateCount,
    handleBack,
    handleNext,
    disabledBackButton,
  };
}

export default useUserRegistration;
